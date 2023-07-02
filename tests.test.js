//const capitalise = require("./using-jest");
import { capitalise, reverseString } from "./string-manip";
import { calc } from "./calculator";

test("Capitalise capital", () => {
  expect(capitalise("capital")).toBe("Capital");
});

test("Capitalise my name", () => {
  expect(capitalise("steph")).toBe("Steph");
});

test("Capitalise london", () => {
  expect(capitalise("london")).toBe("London");
});

test("Reverse reverse", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test("Reverse my name", () => {
  expect(reverseString("Steph")).toBe("hpetS");
});

test("Calculator add 1 and 2", () => {
  expect(calc.add(1, 2)).toBe(3);
});

test("Calculator add 12 and 13", () => {
  expect(calc.add(12, 13)).toBe(25);
});

test("Calculator subtract 2 from 5", () => {
  expect(calc.subtract(5, 2)).toBe(3);
});

test("Calculator subtract 12 from 25", () => {
  expect(calc.subtract(25, 12)).toBe(13);
});

test("Calculator divede 6 by 2", () => {
  expect(calc.divide(6, 2)).toBe(3);
});

test("Calculator divide 25 by 5", () => {
  expect(calc.divide(25, 5)).toBe(5);
});

test("Calculator multiply 5 by 5", () => {
  expect(calc.multiply(5, 5)).toBe(25);
});

test("Calculator multiply 20 by 5", () => {
  expect(calc.multiply(20, 5)).toBe(100);
});
