import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./Home", () => ({ Home: () => <div>Home component</div> }));
jest.mock("./Map", () => ({ Map: () => <div>Map component</div> }));
jest.mock("./Profile", () => ({ Profile: () => <div>Profile component</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Home component");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { container } = render(<App />);

      fireEvent.click(screen.getByText("Map"));
      expect(container.innerHTML).toMatch("Map component");
      fireEvent.click(screen.getByText("Profile"));
      expect(container.innerHTML).toMatch("Profile component");
    });
  });
});
