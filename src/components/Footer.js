import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = {
    facebook: "https://facebook.com/yourpage",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourhandle",
  };

  return (
    <footer className="site-footer mega-footer">
      <div className="container mega-grid">
        <div className="footer-col about">
          <a href="/" className="footer-logo-link" aria-label="Cosine Lab Home">
            <img src={logo} alt="Cosine Lab Logo" className="footer-logo" />
          </a>
          <p>
            Advancing research and collaboration in signal processing and
            machine learning. Follow us for updates and open-source projects.
          </p>
        </div>

        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/research">Research</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Contact</h4>
          <p>
            Email: <a href="mailto:info@cosinelab.org">info@cosinelab.org</a>
          </p>
          <p>Location: Example City, Country</p>
        </div>

        <div className="footer-col social">
          <h4>Follow us</h4>
          <div
            className="social-links"
            role="navigation"
            aria-label="social links"
          >
            <a
              href={socialLinks.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M22 12.07C22 6.49 17.52 2 11.93 2 6.35 2 1.87 6.49 1.87 12.07 1.87 17.09 5.85 21.15 10.63 21.98v-7.02H8.27v-2.89h2.36V9.06c0-2.33 1.39-3.61 3.52-3.61 1.02 0 2.08.18 2.08.18v2.28h-1.17c-1.15 0-1.51.71-1.51 1.44v1.72h2.57l-.41 2.89h-2.16v7.02c4.78-.83 8.76-4.89 8.76-9.91z" />
              </svg>
            </a>

            <a
              href={socialLinks.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20.45 20.45h-3.55v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.38-2.03 2.8v5.38H9.59V9h3.4v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.83zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.58V9h3.53v11.45z" />
              </svg>
            </a>

            <a
              href={socialLinks.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 .5C5.73.5.8 5.43.8 11.7c0 4.88 3.16 9.02 7.54 10.48.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.07.67-3.72-1.48-3.72-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.67 2.55 1.19 3.17.91.1-.71.38-1.19.69-1.46-2.45-.28-5.03-1.22-5.03-5.44 0-1.2.43-2.18 1.13-2.95-.12-.28-.49-1.4.11-2.92 0 0 .93-.3 3.05 1.13.88-.25 1.82-.38 2.75-.38.93 0 1.87.13 2.75.38 2.11-1.44 3.04-1.13 3.04-1.13.6 1.52.24 2.64.12 2.92.7.77 1.13 1.75 1.13 2.95 0 4.23-2.59 5.16-5.05 5.42.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.64.76.53 4.38-1.46 7.53-5.6 7.53-10.48C23.2 5.43 18.27.5 12 .5z" />
              </svg>
            </a>

            <a
              href={socialLinks.twitter}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 001.88-2.37 8.5 8.5 0 01-2.7 1.03 4.24 4.24 0 00-7.22 3.87A12.03 12.03 0 013 4.79a4.24 4.24 0 001.31 5.66c-.63-.02-1.23-.19-1.75-.48v.05c0 2.17 1.55 3.98 3.6 4.39-.38.1-.77.15-1.18.15-.29 0-.57-.03-.84-.08.57 1.78 2.23 3.08 4.19 3.12A8.52 8.52 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.69-6.26 11.69-11.69v-.53A8.36 8.36 0 0024 6.59c-.86.38-1.78.64-2.74.75z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <small>© {year} Cosine Lab. All rights reserved.</small>
      </div>
    </footer>
  );
}
