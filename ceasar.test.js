import { ceasarCipher } from "./ceasarCipher";

test("Shift abc by 3 places", () => {
  expect(ceasarCipher("abc", 3)).toBe("def");
});

test("Shift zab by 1 place", () => {
  expect(ceasarCipher("zab", 1)).toBe("abc");
});

test("Shift abc backwards by 1 place", () => {
  expect(ceasarCipher("abc", -1)).toBe("zab");
});

test("Shift abc backwards by 3 places", () => {
  expect(ceasarCipher("abc", -3)).toBe("xyz");
});
