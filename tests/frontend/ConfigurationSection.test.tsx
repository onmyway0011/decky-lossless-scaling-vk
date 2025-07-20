import { render, screen } from "@testing-library/react";
import { MockConfigProvider } from "../test-utils";
import { ConfigurationSection } from "../../src/components/ConfigurationSection";

test("renders scaling slider", () => {
  render(
    <MockConfigProvider>
      <ConfigurationSection />
    </MockConfigProvider>,
  );
  expect(screen.getByLabelText("缩放倍数")).toBeInTheDocument();
});
