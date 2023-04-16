import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import ResultSummary from "../components/ResultSummary";

afterEach(cleanup);

describe("ResultSummary", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <ResultSummary
          bestOf={100}
          categoryScore={[
            { category: "Memory", score: 55 },
            { category: "Reaction", score: 59 },
            { category: "Verbal", score: 27 },
            { category: "Visual", score: 43 },
          ]}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("functional", () => {
    it("should do correct calculation of avg score", async () => {
      render(
        <ResultSummary
          bestOf={100}
          categoryScore={[
            { category: "Memory", score: 55 },
            { category: "Reaction", score: 59 },
            { category: "Verbal", score: 27 },
            { category: "Visual", score: 43 },
          ]}
        />
      );

      expect(
        await screen.findByText(`${Math.round((55 + 59 + 27 + 43) / 4)}`)
      ).toBeTruthy();
    });
  });
});
