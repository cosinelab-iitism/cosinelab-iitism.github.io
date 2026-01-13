import React from "react";
import "./NewsTicker.css";

const newsItems = [
  "May 2025: Received Faculty Research Scheme grant of INR 19.99 Lakhs from IIT (ISM) Dhanbad.",
  "April 2025: Congratulations to Shubham for being selected for ISRO internship.",
  "April 2025: Paper accepted at IEEE ISCC 2025 (MoCS Workshop), Bologna, Italy.",
  "April 2025: Serving as TPC member for IEEE LCN 2025.",
  "March 2025: Received research grant from TEXMiN Foundation (DST TIH).",
];

function NewsTicker() {
  return React.createElement(
    "div",
    { className: "partners-section" },

    React.createElement(
      "div",
      { className: "partners-container" },

      /* LEFT – NEWS */
      React.createElement(
        "div",
        { className: "news-panel" },

        React.createElement(
          "div",
          { className: "news-header" },
          React.createElement("span", { className: "news-icon" }, "📰"),
          React.createElement("h3", null, "NEWS")
        ),

        React.createElement(
          "div",
          { className: "news-wrapper" },
          React.createElement(
            "div",
            { className: "news-scroll" },
            newsItems.concat(newsItems).map(function (item, index) {
              return React.createElement(
                "div",
                { className: "news-item", key: index },
                item
              );
            })
          )
        )
      ),

      /* RIGHT – CONTENT */
      React.createElement(
        "div",
        { className: "content-card" },

        React.createElement("span", { className: "eyebrow-text" }, "NEWS"),

        React.createElement(
          "h2",
          { className: "card-title" },
          "Our Latest News"
        ),

        React.createElement(
          "p",
          { className: "card-text" },
          "Our research is strengthened by the support of premier institutes and funding agencies. These sponsors enable us to build state-of-the-art testbeds and translate research into real-world impact."
        ),

        React.createElement(
          "p",
          { className: "card-text" },
          "From AI/ML to edge-cloud systems, our collaborators play a key role in shaping secure and intelligent networks."
        ),

        React.createElement(
          "div",
          { className: "tag-row" },
          React.createElement(
            "span",
            { className: "tag" },
            "Institutional Support"
          ),
          React.createElement("span", { className: "tag" }, "Research Grants"),
          React.createElement(
            "span",
            { className: "tag" },
            "Joint Collaboration"
          )
        )
      )
    )
  );
}

export default NewsTicker;
