import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import useGoogleAnalytics from "../../hooks/useGoogleAnalytics ";
import { WaveHero } from "../../components/wave-hero";

export const Home = () => {
  
  useGoogleAnalytics('G-ZVC52HVG8Q')

  const [font, setFont] = useState(() => {
    const defaultFont = "marcellus";
    try {
      return localStorage.getItem("font") || defaultFont;
    } catch {
      return defaultFont;
    }
  });

  const applyFont = (nextFont) => {
    const defaultFont = "marcellus";
    const allowed = new Set(["vt323", "raleway", "marcellus"]);
    const safeFont = allowed.has(nextFont) ? nextFont : defaultFont;
    setFont(safeFont);
    document.documentElement.setAttribute("data-font", safeFont);
    try {
      localStorage.setItem("font", safeFont);
    } catch {
      // Ignore storage errors (e.g. private browsing).
    }
  };

  const handleFontChange = (e) => applyFont(e.target.value);
  
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-100">
            <WaveHero />
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x" style={{fontSize:'2.5rem'}}>{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x" style={{fontSize:'2rem'}}>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.zero,
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                      typeSpeed: 0.1
                    }}
                  />
                </h1>
                <p className="mb-1x" style={{fontSize:'1.75rem'}}>{introdata.description}</p>
                <p className="mb-1x" style={{fontSize:'1.75rem'}}>{introdata.description2}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/my-work" className="text_2">
                    <div id="button_h" className="ac_btn btn" style={{fontSize:'1.5rem'}}>
                      My Work
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn" style={{fontSize:'1.5rem'}}>
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <label className="font-select-wrap" htmlFor="site-font-select">
                    <span className="font-select-label">Change font:</span>
                    <select
                      id="site-font-select"
                      className="font-select"
                      value={font}
                      onChange={handleFontChange}
                      aria-label="Change font for the website"
                    >
                      <option value="marcellus">Marcellus</option>
                      <option value="raleway">Raleway</option>
                      <option value="vt323">Pixelated</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
