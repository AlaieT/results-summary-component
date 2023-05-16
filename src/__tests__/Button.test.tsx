import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import Button from "../components/Button";

afterEach(cleanup);

describe("Button", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(render(<Button />).asFragment()).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should call function on click if type - button", () => {
      const mockFunc = jest.fn((e) => e.preventDefault());

      render(
        <Button type="button" onClick={mockFunc}>
          Click
        </Button>
      );

      fireEvent.click(screen.getByRole("button"));

      expect(mockFunc).toBeCalled();
    });

    it("should submit form on click if type - submit", () => {
      const mockFunc = jest.fn((e) => e.preventDefault());

      render(
        <form onSubmit={mockFunc}>
          <Button type="submit">Submit</Button>
        </form>
      );

      fireEvent.click(screen.getByRole("button"));

      expect(mockFunc).toBeCalled();
    });
  });
});
