import React, { useEffect, useRef } from "react";
import "./style.css";

const OCEAN_BG = "#0b3d5c";
const OCEAN_LINE = { r: 120, g: 200, b: 230 };
const OCEAN_FOAM = { r: 230, g: 245, b: 255 };
const LINE_COUNT = 28;

function rgba({ r, g, b }, alpha) {
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function buildLines(count) {
  return Array.from({ length: count }, (_, i) => {
    const t = i / Math.max(count - 1, 1);
    // Nearshore (bottom) = taller breaking energy; offshore (top) = smaller swell
    const nearshore = t * t;
    return {
      freq: 0.008 + nearshore * 0.01 + (i % 5) * 0.0008,
      amp: 14 + nearshore * 42 + Math.sin(i * 1.1) * (6 + nearshore * 10),
      // Fast roll — surfable energy
      speed: 0.0022 + nearshore * 0.0018 + (i % 4) * 0.00035,
      phase: i * 0.85 + Math.sin(i * 2.1) * 0.6,
      chop: 0.45 + nearshore * 0.35,
      alpha: 0.28 + nearshore * 0.4,
      lineWidth: 1.35 + nearshore * 0.7,
      foam: i > 0 && i % 5 === 0,
    };
  });
}

export const WaveHero = () => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const lines = buildLines(LINE_COUNT);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let visible = true;
    let start = performance.now();

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now) => {
      const time = reducedMotion ? 0 : now - start;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = OCEAN_BG;
      ctx.fillRect(0, 0, width, height);

      const topPad = height * 0.05;
      const usable = height - topPad * 2;

      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (let i = 0; i < lines.length; i += 1) {
        const line = lines[i];
        const t = i / Math.max(lines.length - 1, 1);
        const easeT = Math.pow(t, 0.85);
        const baseY = topPad + usable * easeT;

        ctx.beginPath();
        ctx.lineWidth = line.lineWidth;

        const step = Math.max(2, Math.floor(width / 200));
        for (let x = 0; x <= width; x += step) {
          const theta = x * line.freq + time * line.speed + line.phase;
          // Steeper face + rolling crest (surfable swell, not soft sine)
          const swell = Math.sin(theta);
          const steepFace =
            Math.sin(theta) * Math.abs(Math.sin(theta)) * line.amp * 0.55;
          const chop =
            Math.sin(theta * 2.15 + line.phase) * line.amp * line.chop * 0.35;
          const roll =
            Math.sin(theta * 0.5 + time * line.speed * 0.4) *
            line.amp *
            0.2;
          const y = baseY + swell * line.amp * 0.65 + steepFace + chop + roll;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = line.foam
          ? rgba(OCEAN_FOAM, Math.min(0.85, line.alpha + 0.2))
          : rgba(OCEAN_LINE, Math.min(0.75, Math.max(0.28, line.alpha)));
        ctx.stroke();
      }
    };

    const tick = (now) => {
      if (!visible) {
        rafId = 0;
        return;
      }
      draw(now);
      if (!reducedMotion) rafId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (reducedMotion || rafId) return;
      rafId = requestAnimationFrame(tick);
    };

    resize();
    draw(performance.now());
    startLoop();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) startLoop();
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(wrap);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="wave-hero" ref={wrapRef} aria-hidden="true">
      <canvas className="wave-hero__canvas" ref={canvasRef} />
    </div>
  );
};
