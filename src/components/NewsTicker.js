import React, { useState } from "react";
import "./NewsTicker.css";

const newsItems = [
  "October 2026: A new book chapter, 'Game-Theoretic Optimization of Edge-Enabled Gateways for Cloud-Integrated Access Networks,' is forthcoming in Cloud-Network Convergence (Springer Nature).",
  "October 2026: 'Autonomous Traffic-Adaptive RAW Scheduling for IEEE 802.11ah IoT Networks' is part of the 28th ACM International Conference on Distributed Computing and Networking (ICDCN 2027) in Suratkal, India.",
  {
    date: "July 2026",
    text: "Our book, Edge-enabled 6G Networking - Foundations, Technologies, and Applications, is available for purchase.",
    link: "https://www.amazon.in/Edge-enabled-Networking-Foundations-Technologies-Applications/dp/303219041X",
  },
  "June 2026: Papes accepted at NCVPRIPG 2026 (Jaipur, India) and TENCON 2026 (Bali, Indonesia). ",
  "June 2026: MSc students, Debanshu and Subhadeep, selected for `CIL-IMiN Fellowship 2026'",
  "June 2026: Prof. Ojha delivered a keynote lecture at Workshop 16 of IEEE VTC-Spring 2026 at Nice, France.",
  "April 2026: Prof. Ojha will serve as Visa and Travel chair at IEEE ANTS 2026.",
  "April 2026: Papers accepted in IEEE SEFET (VNIT Nagpur) and IEEE COMPSAC 2026 (Madrid, Spain). ",  
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
    const [datePart] = typeof item === "string" ? item.split(": ") : [item.date];
    const year = datePart.split(' ')[1];
    if (!groups[year]) groups[year] = [];
    groups[year].push(item);
  });
  return groups;
}

const newsByYear = groupByYear(newsItems);
const years = Object.keys(newsByYear).sort((a, b) => b - a);

function NewsTicker() {
  const [selectedYear, setSelectedYear] = useState(years[0] || '2026');

  return (
    <div className="partners-section">
      <div className="partners-container">
        {/* LEFT – NEWS */}
        <div className="content-card">
          <span className="eyebrow-text">NEWS</span>

          <h2 className="card-title">Our Latest News</h2>

          <p className="card-text">
            Recent publications include a forthcoming book chapter in <em>"Cloud-Network Convergence"</em> to be published by Springer Nature
             and a conference paper at ACM ICDCN 2027.
          </p>
        </div>


        {/* RIGHT – CONTENT */}
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
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      {item.date}: {item.text} {" "}
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        Buy the book
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsTicker;
