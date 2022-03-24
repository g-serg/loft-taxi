import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  it("renders correctly", () => {
    render(<Home />);
    expect(screen.getByLabelText("Email:")).toHaveAttribute("name", "email");
    expect(screen.getByLabelText("Password:")).toHaveAttribute("name", "password");
  });
});
