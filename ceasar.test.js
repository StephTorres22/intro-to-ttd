import { ceasarCipher } from "./ceasarCipher";

test("Shift abc by 3 places", () => {
  expect(ceasarCipher("abc", 3)).toBe("def");
});

test("Shift zab by 1 place", () => {
  expect(ceasarCipher("zab", 1)).toBe("abc");
});
