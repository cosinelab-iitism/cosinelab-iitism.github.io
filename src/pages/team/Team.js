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

const teamMembers = [
  {
    name: "Dr. Tamoghna Ojha",
    role: "Assistant Professor",
    description:
      "",
    image: tamoghna,
    linkedin: "https://www.linkedin.com/in/tamoghnaojha/",
  },
  {
    name: "Arjab De",
    role: "PhD Student",
    description:
      "Topic: Futuristic Intelligent Networks",
    image: arjab1,
    linkedin: "https://www.linkedin.com/in/arjab-de-919559312/",
  },
  {
    name: "Kimsie Phan",
    role: "MSc Student",
    description:
      "Topic: Federated Learning for Resource-constrained IoT",
    image: kimsie,
    linkedin: "https://kimsiephan.github.io",
  },
  {
    name: "Scaria P Anil",
    role: "MSc Student",
    description:
      "Topic: Semantic Communication and Resource Allocation",
    image: scaria,
    linkedin: "https://www.linkedin.com/in/scaria-p-anil-9649122b5/",
  },
  {
    name: "Tarun Kr Das",
    role: "MTech Student",
    description:
      "Topic: Non-Terrestrial Networks",
    image: tarun,
    linkedin: "https://www.linkedin.com/in/tarun-kr-das-7b38432bb/",
  },
  {
    name: "Pintu Shaw",
    role: "MTech Student",
    description:
      "Topic: Intelligent Networks",
    image: pintu,
    linkedin: "http://www.linkedin.com/in/pintu-shaw-641a50308",
  },
  {
    name: "Subhadeep Nandi",
    role: "MSc Student",
    description:
      "Topic: Intelligent Networks",
    image: subhadeep,
    linkedin: "https://www.linkedin.com/in/subhadeep-nandi-8140672a7/",
  },
  {
    name: "Debanshu Jana",
    role: "MSc Student",
    description:
      "Topic: Intelligent Networks",
    image: debanshu,
    linkedin: "https://www.linkedin.com/in/debanshu-jana-099a1336b/",
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

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-btn"
              >
                View Profile
              </a>
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
