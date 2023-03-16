import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.scss";
import ResultSummary from "./components/ResultSummary";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main>
      <ResultSummary
        categoryScore={[
          {
            category: "Reaction",
            score: 80,
          },
          {
            category: "Memory",
            score: 92,
          },
          {
            category: "Verbal",
            score: 61,
          },
          {
            category: "Visual",
            score: 72,
          },
        ]}
        bestOf={65}
      />
    </main>
    <footer>
      <p>
        Challenge by&nbsp;
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        .&nbsp; Coded by&nbsp;<a href="#">Ilya Shafeev</a>.
      </p>
    </footer>
  </React.StrictMode>
);
