import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="hero-header">
      <div className="hero-overlay">
        <div className="hero-inner">
          {/* Top logo text */}
          <div className="hero-logo">
            <img src={logo} alt="COSINE Lab Logo" />
          </div>

          {/* Center title + subtitle */}

          <p className="hero-subtitle">
            Computing for Secure and Intelligent Networks Lab
          </p>

          {/* Nav – routing kept the same */}
          <nav className="hero-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              HOME
            </NavLink>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              RESEARCH
            </NavLink>
            <NavLink
              to="/publication"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              PUBLICATIONS
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              TEAM
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              CONTACT
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
