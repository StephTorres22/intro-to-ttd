/* capitalise, 
takes string returns string with first letter capitalised

-reverseString, takse string, returns it reverserd,

-calc obj, with add, subtract, divide, and multiply methods,
 each method takes two numbers */
export function capitalise(string) {
  return string[0].toUpperCase() + string.slice(1, string.length);
}

export function reverseString(string) {
    let arr = string.split('');

    return arr.reverse().join('');
}


//module.exports = capitalise;
