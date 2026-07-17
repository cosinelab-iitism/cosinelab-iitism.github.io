import React from "react";
import "./Team.css";
import tamoghna from "../../images/tamoghna.jpg";
import arjab1 from "../../images/arjab1.jpg";
import kimsie from "../../images/kimsie.jpg";
import scaria from "../../images/scaria.jpg";
import tarun from "../../images/tarun.jpg";
import pintu from "../../images/pintu.jpg";
import subhadeep from "../../images/subhadeep.jpg";
import debanshu from "../../images/debanshu.jpg";
import mannan from "../../images/mannan.png";
import teammember from "../../images/team-member-placeholder.jpg";

const teamMembers = [
  {
    name: "Dr. Tamoghna Ojha",
    role: "Assistant Professor",
    description:
      "",
    image: tamoghna,
    website: "https://tamoghnaojha.github.io/",
    linkedin: "https://www.linkedin.com/in/tamoghnaojha/",
  },
  {
    name: "Arjab De",
    role: "PhD Student",
    description:
      "Topic: Futuristic Intelligent Networks",
    image: arjab1,
    website: "#",
    linkedin: "https://www.linkedin.com/in/arjab-de-919559312/",
  },
  {
    name: "Kimsie Phan",
    role: "MSc Student",
    description:
      "Topic: Federated Learning for Resource-constrained IoT",
    image: kimsie,
    website: "https://kimsiephan.github.io",
    linkedin: "https://www.linkedin.com/in/phan-kimsie-307292320/",
  },
  {
    name: "Scaria P Anil",
    role: "MSc Student",
    description:
      "Topic: Semantic Communication and Resource Allocation",
    image: scaria,
    website: "#",
    linkedin: "https://www.linkedin.com/in/scaria-p-anil-9649122b5/",
  },
  {
    name: "Tarun Kr Das",
    role: "MTech Student",
    description:
      "Topic: Non-Terrestrial Networks",
    image: tarun,
    website: "#",
    linkedin: "https://www.linkedin.com/in/tarun-kr-das-7b38432bb/",
  },
  {
    name: "Pintu Shaw",
    role: "MTech Student",
    description:
      "Topic: Intelligent Networks",
    image: pintu,
    website: "#",
    linkedin: "http://www.linkedin.com/in/pintu-shaw-641a50308",
  },
  {
    name: "Subhadeep Nandi",
    role: "MSc Student (CIL - IMiN Fellowship 2026)",
    description:
      "Topic: Intelligent Networks",
    image: subhadeep,
    website: "#",
    linkedin: "https://www.linkedin.com/in/subhadeep-nandi-8140672a7/",
  },
  {
    name: "Debanshu Jana",
    role: "MSc Student (CIL - IMiN Fellowship 2026)",
    description:
      "Topic: Intelligent Networks",
    image: debanshu,
    website: "#",
    linkedin: "https://www.linkedin.com/in/debanshu-jana-099a1336b/",
  },
  {
    name: "Mannan Golchha",
    role: "B.Tech Student (Chanakya UG Intern @ TEXMiN)",
    description:
      "Topic: Agentic AI",
    image: mannan,
    website: "#",
    linkedin: "https://www.linkedin.com/in/mannan-golchha/",
  },
    {
    name: "Anjali Ojha",
    role: "UG Intern",
    description:
      "Topic: AI/ML for Resource-constrained Networks",
    image: teammember,
    website: "#",
    linkedin: "https://www.linkedin.com/in/anjali-ojha-919ab7287",
  },  
  {
    name: "Gargi Kedia",
    role: "UG Intern",
    description:
      "Topic: AI/ML for Resource-constrained Networks",
    image: teammember,
    website: "#",
    linkedin: "https://www.linkedin.com/in/gargi-kedia-26626b27b",
  },
];

export default function Team() {
  return (
    <main className="team-page">
      <h1 className="team-title">Meet Our Team</h1>
      <p className="team-subtitle">
        Meet the passionate people who drive our vision forward.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div
              className="team-card-image"
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className="card-overlay"></div>
            </div>

            <div className="team-card-body">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>

              <div className="buttons-container">
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '5px' }}>
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Website
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '5px' }}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous members section with interns list */}
      <section className="previous-members">
        <h2 className="previous-members-title">Previous Members</h2>
        <div className="interns">
          <h3>Summer Interns - 2025</h3>
          <ul>
            <li>Mr. Manjil Nepal. Topic: Federated Learning for Resource-constrained IoT</li>
            <li>Ms. Jiya Debnath. Topic: TinyML models</li>
            <li>Mr. Priyangshu Sahaji. Topic: Resource-constrained IoT Networks</li>
          </ul>
          <h3>ACM Anveshan Setu Visiting PhD Student - Summer 2025</h3>
          <ul>
            <li>Ms. Arshee Naz (NIT Delhi). Topic: AI/ML-based Communication Protocol for Non-Terrestrial Networks</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
