// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;

counter();

function counter() {
  count++;
  console.log(counter);

  if (count < 10) {
    setTimeout(counter, 1000);
  } else {
    console.log("Stop");
  }
}

// (Hint: setTimeout)
