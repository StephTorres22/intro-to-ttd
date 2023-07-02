/* Takes a string and a shift factor, 

returns string with every char shifted by factor

i.e abc, 3 => def

think about wrapping around a - z

what to do about punctuation*/

/* break string down
could hold letter values in a set i.e a: 0, b: 1, loop through set to find value, return key with value + shift

work out edge cases for a -shift and z+shift

remove punctuation add back in at end

what about capitals...?

do i use a regex..?*/

export function ceasarCipher(string, shift) {
  const alpha = alphabetArray();
  const shiftedString = [];
  const stringArr = string.toLowerCase().split("");

  for (let i = 0; i < stringArr.length; i++) {
    /* check char is in alphabet */
    if (alpha.includes(stringArr[i])) {
      /* wrap z-a */
      if (!alpha[alpha.indexOf(stringArr[i] + shift)]) {
        let counter = 0;
        while (alpha[alpha.indexOf(stringArr[i]) + counter]) {
          counter++;
        }
        let remainder = shift - counter;
        shiftedString.push(alpha[remainder]);
      }
      shiftedString.push(alpha[alpha.indexOf(stringArr[i]) + shift]);
    }

    // shiftedString.push(alphaMap)
  }
  return shiftedString.join("");
}

//console.log(ceasarCipher());

function alphabetArray() {
  /* make a new array with 26 items with value 0, take index add 65 to it and set value at i to that number */
  const alpha = new Array(26).fill(0).map((e, i) => (e = i + 65));

  /* these numbers represent the charcode for each letter in the alphabet, get string from that. */
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  const alphaMap = new Map();
  /* couldd use a map but think i might be easier to just use an array. */
  alphabet.forEach((value, index) => alphaMap.set(value, index));
  return alphabet;
}
console.log(ceasarCipher("xyz", 3));
