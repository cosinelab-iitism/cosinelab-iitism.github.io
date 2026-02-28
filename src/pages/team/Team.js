import React from "react";
import "./Team.css";
import tamoghna from "../../images/tamoghna.jpg";

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
      "Working on futuristic intelligent networks",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rahul Sharma",
    role: "UI/UX Designer",
    description:
      "Designs intuitive interfaces with a strong emphasis on usability and aesthetics.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rahul Sharma",
    role: "UI/UX Designer",
    description:
      "Designs intuitive interfaces with a strong emphasis on usability and aesthetics.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rahul Sharma",
    role: "UI/UX Designer",
    description:
      "Designs intuitive interfaces with a strong emphasis on usability and aesthetics.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    linkedin: "https://www.linkedin.com/",
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
    </main>
  );
}
