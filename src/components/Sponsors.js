import React from "react";
import "./Sponsors.css";

import iitLogo from "../images/iit-ism-logo.jpg";
import texminLogo from "../images/texmin-iitism.jpg";
import collabLogo from "../images/collab-institutes.jpg";

export default function Sponsors() {
  const sponsors = [
    { id: 1, name: "IIT (ISM)", logo: iitLogo },
    { id: 2, name: "Texmin IITISM", logo: texminLogo },
    { id: 3, name: "Collaborators", logo: collabLogo },
  ];

  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        {/* Left column – text */}
        <div className="sponsors-left">
          <p className="sponsors-eyebrow">Partners in Innovation</p>
          <h2 className="sponsors-title">Our Sponsors & Collaborators</h2>
          <p className="sponsors-text">
            Our research is strengthened by the support of premier institutes
            and funding agencies. These sponsors enable us to build
            state-of-the-art testbeds, pursue ambitious ideas, and translate
            fundamental research into real-world impact.
          </p>
          <p className="sponsors-text">
            From core funding for our lab infrastructure to project-based grants
            in areas such as AI/ML, UAV-IoT, and edge-cloud systems, our
            collaborators play a key role in shaping the future of secure and
            intelligent networks.
          </p>

          <div className="sponsors-tags">
            <span className="sponsor-tag">Institutional Support</span>
            <span className="sponsor-tag">Research Grants</span>
            <span className="sponsor-tag">Joint Collaboration</span>
          </div>
        </div>

        {/* Right column – scrolling logos */}
        <div className="sponsors-right">
          <div className="slider-card">
            <div className="slider">
              <div className="slide-track">
                {[...sponsors, ...sponsors].map((sponsor, index) => (
                  <div key={index} className="slide">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="slide-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="slider-caption">
              Logos scroll automatically showcasing our key sponsors and partner
              institutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
