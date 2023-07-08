/* Takes an array of numbers, returns an object with the following props:

average,
min,
max,
length

write tests first!*/

/* don't really need any of these, especially get length, but makes it helpful to test individual components */

export const getAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

export const getMin = (arr) => Math.min(...arr);

export const getMax = (arr) => Math.max(...arr);

/* don't need this */
export const getLength = (arr) => arr.length;

export function analyseArray(arr) {
  return {
    average: getAverage(arr),
    minimum: getMin(arr),
    maximum: getMax(arr),
    length: arr.length,
  };
}
