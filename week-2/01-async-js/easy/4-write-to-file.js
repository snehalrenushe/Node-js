// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("a.txt", "By snehal !!!", "utf8", (err, res) => {
  console.log("Written");
});

fs.readFile("a.txt", "utf8", (err, res) => {
  console.log(res);
});

fs.appendFile("a.txt", "Welcome !!!", "utf8", (err, res) => {
  console.log("appended");
});

fs.readFile("a.txt", "utf8", (err, res) => {
  console.log(res);
});
