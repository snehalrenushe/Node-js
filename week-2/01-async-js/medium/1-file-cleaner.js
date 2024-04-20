// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

let str = null;

fs.readFile("file.txt", "utf8", (err, res) => {
  if (err) {
    console.log("Something went wrong");
    return;
  }

  console.log(res);

  str = res.replace(/\s+/g, " ").trim();
  console.log(str);

  fs.writeFile("file.txt", str, "utf8", (err, res) => {
    if (err) {
      console.log("Something went wrong");
      return;
    }

    console.log(res);
  });
});
