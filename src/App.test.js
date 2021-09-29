import { render, screen } from "@testing-library/react";
import MyApp from "./MyApp";

test("renders learn react link", () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/Charlie/i);
  expect(linkElement).toBeInTheDocument();
});
