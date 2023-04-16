import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import Button from "../components/Button";

afterEach(cleanup);

describe("Button", () => {
  const mockFunc = jest.fn((e) => e.preventDefault());

  describe("correct render", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(<Button />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should call function on click if type - button", async () => {
      render(
        <Button type="button" onClick={mockFunc}>
          Click
        </Button>
      );

      fireEvent.click(await screen.findByText("Click"));

      expect(mockFunc).toBeCalled();
    });

    it("should submit form on click if type - submit", async () => {
      render(
        <form onSubmit={mockFunc}>
          <Button type="submit">Submit</Button>
        </form>
      );

      fireEvent.click(await screen.findByText("Submit"));

      expect(mockFunc).toBeCalled();
    });
  });
});
