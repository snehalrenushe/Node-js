/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

let arr = [3, 27, 2, 9, 1];

let res = findLargestElement(arr);
console.log("Largest no. is : " + res);

function findLargestElement(numbers) {
  let lagestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (lagestNumber < numbers[i]) {
      lagestNumber = numbers[i];
    }
  }

  return lagestNumber;
}

module.exports = findLargestElement;
