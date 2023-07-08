import {
  getAverage,
  getMin,
  getMax,
  getLength,
  analyseArray,
} from "./analyseArray.js";

describe("Find average of given array", () => {
  it.each([
    [[1, 2, 3, 4, 5], 3],
    [[20, 40, 60, 12], 33],
    [[200, 100], 150],
  ])("Average of %p -> %p", (arr, expected) => {
    const actual = getAverage(arr);
    expect(actual).toEqual(expected);
  });
});

describe("Find min value of given array", () => {
  it.each([
    [[1, 2, 3, 4, 5], 1],
    [[20, 40, 60, 12], 12],
    [[200, 100], 100],
  ])("Smallest value of %p -> %p", (arr, expected) => {
    const actual = getMin(arr);
    expect(actual).toEqual(expected);
  });
});

describe("Find max value of given array", () => {
  it.each([
    [[1, 2, 3, 4, 5], 5],
    [[20, 40, 60, 12], 60],
    [[200, 100], 200],
  ])("Largest value of %p -> %p", (arr, expected) => {
    const actual = getMax(arr);
    expect(actual).toEqual(expected);
  });
});

describe("Find length of given array", () => {
  it.each([
    [[1, 2, 3, 4, 5], 5],
    [[20, 40, 60, 12], 4],
    [[200, 100], 2],
  ])("Length of %p -> %p", (arr, expected) => {
    const actual = getLength(arr);
    expect(actual).toEqual(expected);
  });
});

describe("Find properties of given array", () => {
  it.each([
    [[1, 2, 3, 4, 5], { average: 3, minimum: 1, maximum: 5, length: 5 }],
    [[20, 40, 60, 12], { average: 33, minimum: 12, maximum: 60, length: 4 }],
    [[200, 100], { average: 150, minimum: 100, maximum: 200, length: 2 }],
  ])("Properties of %p -> %p", (arr, expected) => {
    const actual = analyseArray(arr);
    expect(actual).toEqual(expected);
  });
});
