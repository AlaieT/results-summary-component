import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import CategoryScore from "../components/CategoryScore";

afterEach(cleanup);

describe("CategoryScore", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <CategoryScore category="Memory" score={50} />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("should display correct score", async () => {
      render(<CategoryScore category="Memory" score={50} />);

      expect(await screen.findByText("50")).toBeTruthy();
    });
  });
});
