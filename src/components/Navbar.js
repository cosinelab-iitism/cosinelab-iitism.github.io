import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`sticky-navbar ${showNavbar ? "visible" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="COSINE Lab Logo" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${mobileMenuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            end
            onClick={closeMobileMenu}
          >
            HOME
          </NavLink>
          <NavLink
            to="/research"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            onClick={closeMobileMenu}
          >
            RESEARCH
          </NavLink>
          <NavLink
            to="/publication"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            onClick={closeMobileMenu}
          >
            PUBLICATIONS
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            onClick={closeMobileMenu}
          >
            TEAM
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            onClick={closeMobileMenu}
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            onClick={closeMobileMenu}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
