import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import "../src/style/Navbar.css";
import logo from "./assets/WEAL.png";
import pesuLogo from "./assets/PES2.png";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <div className="gradient"></div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" className="Logo" />
          </NavLink>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className="link-names"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blog"
                style={{ textDecoration: "none" }}
                className="link-names"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Interface"
                style={{ textDecoration: "none" }}
                className="link-names"
              >
                Interface
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/SignUP"
                style={{ textDecoration: "none" }}
                className="link-names"
              >
                Sign-up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/SignIn"
                style={{ textDecoration: "none" }}
                className="link-names"
              >
                Sign-in
              </NavLink>
            </li>
          </ul>
        </div>
        <img src={pesuLogo} alt="pesLogo" className="pesuLogo" />

        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{ color: "white" }} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;