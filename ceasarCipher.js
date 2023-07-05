/* Takes a string and a shift factor, 

returns string with every char shifted by factor

i.e abc, 3 => def



 break string down

moving backwards, convert to a forward move, i.e -1 = +25

what about capitals...?

*/
/* this does not work for larger numbers e.g 83... */
export function ceasarCipher(string, shift) {
  const alpha = alphabetArray();
  const shiftedStringArr = [];
  const stringArr = string.toLowerCase().split("");
  const capitalsIndex = [];

  /* make a note of capital letters position in original string */
  for (let i = 0; i < string.length; i++) {
    if (isUppercase(string[i])) {
      capitalsIndex.push(i);
    }
  }

  for (let i = 0; i < stringArr.length; i++) {
    /* check char is in alphabet */
    if (alpha.includes(stringArr[i])) {
      /* need to change this to make it work with large numbers, recursion... */
      /* wrap z-a */
      if (!alpha[alpha.indexOf(stringArr[i] + shift)]) {
        shiftedStringArr.push(wrap(alpha, stringArr, shift, i));
        //console.log(wrap(alpha, stringArr, shift, i), shiftedStringArr[i]);
      }
    } else {
      /* not shifting punctuation of numbers, just pop them back in the string in the order they came, 
       only performing a shift on letters.  */
      shiftedStringArr.push(stringArr[i]);
    }
  }

  // shiftedString.push(alphaMap)

  /* if capitals were present in original string, capitalise the now shifted letter in the correct position. */

  let shiftedString = shiftedStringArr.join("");
  if (capitalsIndex.length > 0) {
    for (let i = 0; i < capitalsIndex.length; i++) {
      shiftedString = upperCaseAt(shiftedString, capitalsIndex[i]);
    }
  }

  return shiftedString;
}

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

export function isUppercase(ch) {
  return ch == ch.toLowerCase() ? false : ch == ch.toUpperCase() ? true : false;
}

function upperCaseAt(str, i) {
  return str.substr(0, i) + str.charAt(i).toUpperCase() + str.substr(i + 1);
}

function wrap(arr, stringArr, shift, index) {
  if (arr[arr.indexOf(stringArr[index] + shift)]) {
    return arr[arr.indexOf(stringArr[index] + shift)];
  } else {
    let counter = 0;

    /* converts a backwards shift into the forward equivalent if need to wrap*/
    if (shift < 0) {
      shift += arr.length;
    }

    while (arr[arr.indexOf(stringArr[index]) + counter]) {
      counter++;
    }
    let remainder = shift - counter;

    if (!arr[arr.indexOf(stringArr[index]) + remainder]) {
      wrap(arr, stringArr, remainder, index);
    }
  }
}

console.log(ceasarCipher("aBcdE1!3hIjK61.", 1));
