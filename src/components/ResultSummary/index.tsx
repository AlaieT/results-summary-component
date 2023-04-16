import React, { useMemo } from "react";

import CategoryScore from "../CategoryScore";
import Button from "../Button";

import type { ResultSummaryProps } from "../../types";

import styles from "../../styles/components/resultSummary.module.scss";

const ResultSummary = ({ categoryScore, bestOf }: ResultSummaryProps) => {
  const score = useMemo<number>(
    () =>
      Math.round(
        categoryScore.reduce((prev, curr) => prev + curr.score, 0) /
          categoryScore.length
      ),
    [categoryScore]
  );

  return (
    <div id={styles.container}>
      <div id={styles.result}>
        <h1>Your result</h1>
        <div id={styles.score}>
          {score}
          <span>of 100</span>
        </div>
        <h2>Great</h2>
        <p>
          Your score higher then {bestOf}% of the people who have taken these
          tests.
        </p>
      </div>
      <div id={styles.summary}>
        <h1>Summary</h1>
        <ul>
          {categoryScore.map((item) => (
            <li key={item.category}>
              <CategoryScore {...item} />
            </li>
          ))}
        </ul>
        <Button>Continue</Button>
      </div>
    </div>
  );
};

export default ResultSummary;
