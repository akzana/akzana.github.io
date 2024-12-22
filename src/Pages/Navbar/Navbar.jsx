import React from "react";
import './navbar.css';

function Navbar({ setActiveComponent, activeComponent }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "about" ? "active" : ""}`}
            onClick={() => setActiveComponent("about")}
          >
            Home
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "resume" ? "active" : ""}`}
            onClick={() => setActiveComponent("resume")}
          >
            Experience
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "certificate" ? "active" : ""}`}
            onClick={() => setActiveComponent("certificate")}
          >
            Certificates
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeComponent === "project" ? "active" : ""}`}
            onClick={() => setActiveComponent("project")}
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
