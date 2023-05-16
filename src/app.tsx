import React, { useEffect, useState } from "react";

import Home from "./pages/home.page";

import type { ResultSummaryProps } from "./types";

import "./styles/global.scss";

const App = () => {
  const [pageProps, setPageProps] = useState<ResultSummaryProps | null>(null);

  useEffect(() => {
    fetch(
      `${import.meta.env.BASE_URL}data/pagePropsResultSummaryComponent.json`
    )
      .then((response) => response.json())
      .then((data) => setPageProps(data));
  }, []);

  return (
    pageProps && (
      <Home bestOf={pageProps.bestOf} categoryScore={pageProps.categoryScore} />
    )
  );
};

export default App;
