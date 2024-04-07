/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

let str = "A man a plan a canal Panama!";

let result = isPalindrome(str);

if (result) {
  console.log(str + " is a palindrome.");
} else {
  console.log(str + " is not a palindrome.");
}

function isPalindrome(str) {
  let rev = "";

  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  rev = rev.replace(/[^a-z0-9]/g, "");

  if (rev == str) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
