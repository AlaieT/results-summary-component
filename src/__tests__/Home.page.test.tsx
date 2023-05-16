import React from "react";
import { render, cleanup } from "@testing-library/react";

import Home from "../pages/home.page";

afterEach(cleanup);

describe("Home", () => {
  const props = {
    bestOf: 100,
    categoryScore: [
      { category: "Memory", score: 55 },
      { category: "Reaction", score: 59 },
      { category: "Verbal", score: 27 },
      { category: "Visual", score: 43 },
    ],
  };

  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(
          <Home bestOf={props.bestOf} categoryScore={props.categoryScore} />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
});
