/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

let str = "SNEHaL";
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let cnt = countVowels(str);
console.log(cnt);

function countVowels(str) {
  let count = 0;

  // if (str.length == 0) {
  //   return false;
  // }

  let sortStr = str.split("").join(",");

  for (let i = 0; i < sortStr.length; i++) {
    if (vowels.includes(sortStr[i])) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
