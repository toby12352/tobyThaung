import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          <Link  className="navbar-brand nav_ac" to="/" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', fontFamily: "'VT323', monospace", fontSize:'30px' }}>
            {logotext}
          </Link>
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
                  <Link  onClick={handleToggle} to="/" className="my-3 hover-option" style={{fontFamily: "'VT323', monospace"}}>Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3" style={{fontFamily: "'VT323', monospace"}}> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3" style={{fontFamily: "'VT323', monospace"}}>About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3" style={{fontFamily: "'VT323', monospace"}}> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a target="_blank" href={socialprofils.github} style={{fontFamily: "'VT323', monospace", fontSize:'1.3rem'}}>Github</a>
            <a target="_blank" href={socialprofils.linkedin} style={{fontFamily: "'VT323', monospace", fontSize:'1.3rem'}}>LinkedIn</a>
            </div>
            <p className="copyright m-0" style={{fontFamily: "'VT323', monospace", fontSize:'1.3rem'}}>copyright __ {logotext}</p>
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
