// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

let counter = 0;

let interval = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter === 10) {
    clearInterval(interval);
  }
}, 1000);
