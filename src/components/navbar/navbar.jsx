import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <h1>Aahaan Sethi</h1>

      <ul className="nav-menu">
        <li>
          <Link to="/">
            <p className={location.pathname === "/" ? "active" : ""}>Home</p>
          </Link>
        </li>

        <li>
          <Link to="/about">
            <p className={location.pathname === "/about" ? "active" : ""}>About</p>
          </Link>
        </li>

        <li>
          <Link to="/projects">
            <p className={location.pathname === "/projects" ? "active" : ""}>
              Projects
            </p>
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <p className={location.pathname === "/contact" ? "active" : ""}>
              Contact Me
            </p>
          </Link>
        </li>
      </ul>

      <Link to="/contact" className="nav-connect">
        Connect With Me
      </Link>
    </div>
  );
}

export default Navbar;
