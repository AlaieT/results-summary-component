import React, { useEffect, useState } from "react";

import ResultSummary from "./components/ResultSummary";

import type { ResultSummaryProps } from "./types";

import "./styles/global.scss";

const App = () => {
  const [pageProps, setPageProps] = useState<ResultSummaryProps | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/pagePropsResultSummaryComponent.json`)
      .then((response) => response.json())
      .then((data) => setPageProps(data));
  }, []);

  return (
    pageProps && (
      <>
        <main>
          <ResultSummary
            bestOf={pageProps.bestOf}
            categoryScore={pageProps.categoryScore}
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
            .&nbsp; Coded by&nbsp;
            <a href="https://www.frontendmentor.io/profile/AlaieT">Ilya Shafeev</a>
            .
          </p>
        </footer>
      </>
    )
  );
};

export default App;
