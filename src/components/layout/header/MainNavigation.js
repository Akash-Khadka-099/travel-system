import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./MainNavigation.css";

function MainNavigation() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            LOGO
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/create"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Create New
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/view-all"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact-us"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i>{click ? <FaTimes /> : <FaBars />}</i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavigation;
