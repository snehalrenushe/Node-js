/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length != str2.length) {
    return false;
  }

  let sortStr1 = str1.split("").sort().join(",");
  let sortStr2 = str2.split("").sort().join(",");

  console.log(sortStr1);
  console.log(sortStr2);

  if (sortStr1 == sortStr2) {
    return true;
  } else {
    return false;
  }
}

// let str1 = "as w2";
// let str2 = "sw ar";

// if (isAnagram(str1, str2)) {
//   console.log("Anagram");
// } else {
//   console.log("Not Anagram");
// }
module.exports = isAnagram;
