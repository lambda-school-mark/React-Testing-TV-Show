import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

const showData = [
  {
    id: 553946,
    image: "",
    name: "chapter one",
    season: 1,
    number: 1,
    summary: "words",
    runtime: 60,
  },
  {
    id: 553947,
    image: "",
    name: "chapter two",
    season: 2,
    number: 2,
    summary: "words",
    runtime: 60,
  },
];

test("Episodes do not render without props component", () => {
  render(<Episodes />);
});

test("Episodes renders with component", () => {
  render(<Episodes episodes={showData} />);
  expect(screen.getByText(/chapter one/i)).toBeInTheDocument();
});
