import React from "react";

import ResultSummary from "../components/ResultSummary";

import type { ResultSummaryProps } from "../types";

const Home = ({ bestOf, categoryScore }: ResultSummaryProps) => {
  return (
    <>
      <main>
        <ResultSummary bestOf={bestOf} categoryScore={categoryScore} />
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
          .&nbsp; Coded by&nbsp;
          <a href="https://www.frontendmentor.io/profile/AlaieT">
            Ilya Shafeev
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default Home;
