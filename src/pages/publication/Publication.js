import React, { useState, useEffect } from "react";
import "./Publication.css";

// fetch entries from JSON database and sort by year/month
function sortEntries(entries) {
  return [...entries].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (b.month || 0) - (a.month || 0);
  });
}


export default function Publication() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeTag, setActiveTag] = useState("All");
  const [entries, setEntries] = useState([]);

  // load database when component mounts
  useEffect(() => {
    fetch("/bibtex/publications.json")
      .then((res) => res.json())
      .then((data) => setEntries(sortEntries(data)))
      .catch((err) => console.error("Failed to load publications", err));
  }, []);

  // categorize based on type and current entries
  const journals = entries.filter((e) => e.type === "journal");
  const conferences = entries.filter((e) => e.type === "conference");
  const others = entries.filter(
    (e) => e.type !== "journal" && e.type !== "conference"
  );

  const publications =
    activeTab === "all"
      ? entries
      : activeTab === "journals"
      ? journals
      : activeTab === "conferences"
      ? conferences
      : others;

  const allTags = [
    "All",
    ...new Set(entries.flatMap((p) => p.tags || [])),
  ];

  const filtered =
    activeTag === "All"
      ? publications
      : publications.filter((p) => (p.tags || []).includes(activeTag));

  return (
    <main className="publications-page">
      <h1 className="publications-title">Our Publications</h1>
      {/* TABULAR TABS */}
      <div className="pub-tabular">
        {["all", "journals", "conferences", "others"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => {
              setActiveTab(tab);
              setActiveTag("All");
            }}
          >
            {tab === "all"
              ? "ALL CATEGORIES"
              : tab === "others"
              ? "BOOKS/PATENTS/OTHERS"
              : tab.toUpperCase()}
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

      {/* LIST */}
      <ol className="pub-list">
        {filtered.map((pub, index) => {
          // build IEEE-style citation
          const monthNames = [
            "", // placeholder for 1-based index
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          const monthStr = pub.month ? monthNames[pub.month] : null;

          const citationParts = [];
          if (pub.authors) citationParts.push(pub.authors);
          if (pub.title) citationParts.push(`"${pub.title}"`);
          if (pub.venue) citationParts.push(
            <strong key="venue">
              <em>{pub.venue}</em>
            </strong>
          );
          if (monthStr) citationParts.push(monthStr);
          if (pub.year) citationParts.push(pub.year);

          return (
            <li className="pub-list-item" key={index}>
              <p className="pub-citation">
                {citationParts.map((p, i) => (
                  <span key={i}>
                    {p}
                    {i < citationParts.length - 1 ? ", " : ""}
                  </span>
                ))}
                {pub.note && pub.note.trim() !== "" && (
                  <span className="pub-note"> ({pub.note})</span>
                )}
              </p>

              <div className="action-btn-container">
                {pub.link && (
                  <a
                    className="pub-link"
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                )}
                {pub.bibtexLink && (
                  <a
                    className="pub-link"
                    href={pub.bibtexLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BibTex
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
