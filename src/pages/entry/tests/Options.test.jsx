import { render, screen } from "@testing-library/react";
import Options from "../Options";
// import userEvent from "@testing-library/user-event";

test("Displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", {
    name: /scoop$/i,
  });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
