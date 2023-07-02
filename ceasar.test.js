import { ceasarCipher } from "./ceasarCipher";

test("Shift abc by 3 places", () => {
  expect(ceasarCipher("abc", 3)).toBe("def");
});
