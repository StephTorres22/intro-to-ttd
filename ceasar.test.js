import { ceasarCipher, isUppercase } from "./ceasarCipher";

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

test("Contains numbers shift forward one place", () => {
  expect(ceasarCipher("ab1c", 1)).toBe("bc1d");
});

test("Contains letters, numbers and punctuation, shift forward by 5", () => {
  expect(ceasarCipher("d0es th!5 w0rk?", 5)).toBe("i0jx ym!5 b0wp?");
});

describe("Uppercase Tests", () => {
  it.each([
    ["1", false],
    ["a", false],
    ["B", true],
    ["h", false],
    ["G", true],
    ["8", false],
  ])("value %p is uppercase? %p ", (value, expected) => {
    const actual = isUppercase(value);
    expect(actual).toEqual(expected);
  });
});



test("Contains capital letters", () => {
  expect(ceasarCipher("aBc", 1)).toBe("bCd");
})