import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";

function getBlankAnchor(target) {
  if (!(target instanceof Element)) return null;
  return target.closest("a[target='_blank'], a[target=\"_blank\"]");
}

function formatHost(href) {
  try {
    return new URL(href, window.location.href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

export const ExternalLinkGuard = () => {
  const [pendingHref, setPendingHref] = useState(null);
  const continueRef = useRef(null);
  const previouslyFocused = useRef(null);

  const close = useCallback(() => setPendingHref(null), []);

  const confirm = useCallback(() => {
    if (!pendingHref) return;
    window.open(pendingHref, "_blank", "noopener,noreferrer");
    setPendingHref(null);
  }, [pendingHref]);

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = getBlankAnchor(event.target);
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      setPendingHref(anchor.href || href);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!pendingHref) return undefined;

    previouslyFocused.current = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const frame = window.requestAnimationFrame(() => {
      continueRef.current?.focus();
    });

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      if (
        previouslyFocused.current &&
        typeof previouslyFocused.current.focus === "function"
      ) {
        previouslyFocused.current.focus();
      }
    };
  }, [pendingHref, close]);

  if (!pendingHref) return null;

  const host = formatHost(pendingHref);

  return (
    <div
      className="ext-link-overlay"
      role="presentation"
      onClick={close}
    >
      <div
        className="ext-link-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ext-link-title"
        aria-describedby="ext-link-desc"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="ext-link-eyebrow">Heads up</p>
        <h2 id="ext-link-title" className="ext-link-title">
          Just a quick FYI
        </h2>
        <p id="ext-link-desc" className="ext-link-desc">
          This link continues on{" "}
          <span className="ext-link-host">{host}</span> in a new browser tab.
          Your place here stays open.
        </p>
        <p className="ext-link-url" title={pendingHref}>
          {pendingHref}
        </p>
        <div className="ext-link-actions">
          <button
            type="button"
            className="ext-link-btn ext-link-btn-ghost"
            onClick={close}
          >
            Cancel
          </button>
          <button
            type="button"
            className="ext-link-btn ext-link-btn-solid"
            ref={continueRef}
            onClick={confirm}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
