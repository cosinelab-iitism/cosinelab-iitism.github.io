import React, { useState } from "react";
import "./Publication.css";
import pubJournalImg from "../../images/texmin-iitism.jpg";
import pubConfImg1 from "../../images/cosine-bg.jpg";
import pubConfImg2 from "../../images/collab-institutes.jpg";
import pubWorkshopImg from "../../images/about-img.jpg";

const publicationsData = {
  journals: [
    {
      title:
        "Secure and Energy-Efficient Resource Allocation in UAV-Assisted IoT Networks",
      description:
        "Distributed learning-based framework for secure and energy-efficient resource allocation in UAV-assisted IoT environments.",
      venue: "IEEE Internet of Things Journal, 2024",
      tags: ["UAV-IoT", "AI/ML", "Security"],
      image: pubJournalImg,
      link: "https://example.com/publication/secure-resource-allocation",
    },
  ],

  conferences: [
    {
      title: "AI-Driven Secure Communication Framework for UAV-IoT Networks",
      description:
        "An AI-driven framework enabling secure and reliable communication in UAV-IoT systems.",
      venue: "IEEE ISCC (MoCS Workshop), 2025",
      tags: ["UAV-IoT", "Security"],
      image: pubConfImg1,
      link: "https://example.com/publication/ai-driven-secure-comm",
    },
    {
      title: "Digital Twin Assisted Edge Intelligence for Smart Mining",
      description:
        "Digital twin-based edge intelligence framework for smart mining systems.",
      venue: "IEEE ICC Workshops, 2024",
      tags: ["Digital Twin", "Edge Computing"],
      image: pubConfImg2,
      link: "https://example.com/publication/digital-twin-edge-mining",
    },
  ],

  workshops: [
    {
      title: "Secure Access Control in Metaverse-Enabled IoT Networks",
      description:
        "Lightweight access control mechanisms for secure metaverse-enabled IoT environments.",
      venue: "IEEE MoCS Workshop, 2025",
      tags: ["Metaverse", "IoT", "Security"],
      image: pubWorkshopImg,
      link: "https://example.com/publication/secure-access-metaverse",
    },
  ],
};

export default function Publication() {
  const [activeTab, setActiveTab] = useState("journals");
  const [activeTag, setActiveTag] = useState("All");

  const publications = publicationsData[activeTab];
  const allTags = ["All", ...new Set(publications.flatMap((p) => p.tags))];

  const filtered =
    activeTag === "All"
      ? publications
      : publications.filter((p) => p.tags.includes(activeTag));

  return (
    <main className="publications-page">
      <h1 className="publications-title">Our Publications</h1>
      {/* TABULAR TABS */}
      <div className="pub-tabular">
        {["journals", "conferences", "Books/Patents/Others"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => {
              setActiveTab(tab);
              setActiveTag("All");
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* TAG FILTER */}
      <div className="pub-tags">
        {allTags.map((tag) => (
          <span
            key={tag}
            className={`pub-tag ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CARDS */}
      <div className="pub-card-grid">
        {filtered.map((pub, index) => (
          <div className="pub-card" key={index}>
            <div
              className="pub-card-image"
              style={{ backgroundImage: `url(${pub.image})` }}
            >
              <div className="pub-card-overlay"></div>
            </div>

            <div className="pub-card-body">
              <h3>{pub.title}</h3>
              <p className="pub-desc">{pub.description}</p>
              <p className="pub-venue">{pub.venue}</p>

              <div className="pub-card-tags">
                {pub.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="action-btn-container">
                <div className="pub-card-actions">
                  {pub.link && (
                    <a
                      className="read-more"
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  )}
                </div>
                <div className="pub-card-actions">
                  {pub.link && (
                    <a
                      className="read-more"
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BibTex
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
