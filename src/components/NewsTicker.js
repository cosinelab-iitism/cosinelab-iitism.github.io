import React, { useState } from "react";
import "./NewsTicker.css";

const newsItems = [
    "March 2026: 2 papers accepted in IEEE ICC. Congratulations to Tarun and Alekhya.",
    "February 2026: Prof. Ojha is joined as Associate Editor for the IEEE Networking Letters.",
    "February 2026: Prof. Ojha received research grant from JCSTI.",
    "December 2025: Prof. Ojha is joined as Associate Editor for the IEEE Transactions on Green Communication and Networks.",
    "October 2025: 2 papers accepted in IEEE ANTS. Congratulations to Tarun and Sonali.",
    "October 2025: Prof. Ojha received research grant from NMICPS TiHAN-IIT Hyderabad.",
    "September 2025: Prof. Ojha received special 'Collaborative' research grant from IIT (ISM) Dhanbad.",
    "September 2025: 2 papers accepted in IEEE GLOBECOM. Congratulations to Mitul and Raziur.",
    "August 2025: Prof. Ojha is appointed In-charge Department Labs.",
    "June 2025: Our collaborative work on 'ML-based SDN Security Enhancement' accepted in IEEE INDISCON at Rourkela, India.",
    "May 2025: Prof. Ojha received Faculty Research Scheme grant from IIT (ISM) Dhanbad.",
    "May 2025: Prof. Ojha is appointed FIC (department) for branding of departments at IIT (ISM) Dhanbad.",
    "April 2025: Our collaborative work on `Secure Metaverse access' accepted in MoCS workshop (IEEE ISCC 2025) at Bologna, Italy.",
    "April 2025: Serving as TPC member for IEEE LCN 2025.",
    "March 2025: Prof. Ojha received research grant from TEXMiN Foundation (DST TIH).",
    "February 2025: Prof. Ojha is serving as TPC for IEEE PIMRC 2025 and VTC-Spring 2025.",
    "January 2025: Prof. Ojha joined the editorial board of Scientific Reports (Springer Nature).",
    "December 2024: Best paper award at IEEE OCIT 2024. Congratulations to Amala.",
    "December 2024: Mentor and host for ACM India Anveshan Setu program.",
    "December 2024: 'Scheduling in IEEE 802.15.4-DSME' accepted in IEEE WCNC 2025 at Milan, Italy.",
    "November 2024: Received _Special Lab Establishment grant_ of INR 29.97 Lakhs from IIT (ISM) Dhanbad.",
    "November 2024: Our collaborative work on 'IEEE 802.15.4-DSME' accepted in IEEE ANTS 2024 workshop at IIT Guwahati.",
    "October 2024: Amala's (PhD student) work on 'Off-chip Based PUF' accepted in IEEE OCIT 2024.",
];

function groupByYear(items) {
  const groups = {};
  items.forEach(item => {
    const [datePart] = item.split(': ');
    const year = datePart.split(' ')[1];
    if (!groups[year]) groups[year] = [];
    groups[year].push(item);
  });
  return groups;
}

const newsByYear = groupByYear(newsItems);
const years = Object.keys(newsByYear).sort((a, b) => b - a);

function NewsTicker() {
  const [selectedYear, setSelectedYear] = useState('2026');

  return (
    <div className="partners-section">
      <div className="partners-container">
        {/* LEFT – NEWS */}
        <div className="news-panel">
          <div className="news-header">
            <span className="news-icon">📰</span>
            <h3>NEWS</h3>
          </div>

          <div className="year-tabs">
            {years.map(year => (
              <button
                key={year}
                className={`tab ${selectedYear === year ? 'active' : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="news-wrapper">
            <div className="news-scroll">
              {newsByYear[selectedYear].concat(newsByYear[selectedYear]).map((item, index) => (
                <div className="news-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="content-card">
          <span className="eyebrow-text">NEWS</span>

          <h2 className="card-title">Our Latest News</h2>

          <p className="card-text">
            2 Papers accepted at IEEE ICC 2026 workshop, Glasgow, Scotland in May 2026. Congratulations to Tarun and Alekhya!
          </p>

          <p className="card-text">
            Research project on "Resilient Edge-LoRa System for Early Gas Hazard Detection" is granted by the JCSTI.
          </p>

          <div className="tag-row">
            <span className="tag">Institutional Support</span>
            <span className="tag">Research Grants</span>
            <span className="tag">Joint Collaboration</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsTicker;
