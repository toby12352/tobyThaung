import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const logoClassName = "navbar-brand nav_ac";
  const logoStyle = { backgroundColor: "rgba(0, 0, 0, 0)", fontSize: "30px" };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          {isHome ? (
            <span className={logoClassName} style={logoStyle}>
              {logotext}
            </span>
          ) : (
            <Link className={logoClassName} to="/" style={logoStyle}>
              {logotext}
            </Link>
          )}
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle} style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3 hover-option">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/my-work" className="my-3"> My Work</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a target="_blank" href={socialprofils.github} style={{fontSize:'1.3rem'}}>Github</a>
            <a target="_blank" href={socialprofils.linkedin} style={{fontSize:'1.3rem'}}>LinkedIn</a>
            </div>
            <p className="copyright m-0" style={{fontSize:'1.3rem'}}>copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
