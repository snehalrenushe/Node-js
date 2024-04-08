const express = require("express");

const app = express();

app.use(express.json());

let username = "";
let password = "";

function userMiddleWare(req, res, next) {
  if (!(username === "snehal" && password === "1234")) {
    res.status(400).json({
      msg: "Incorrect user middle ware inputs",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Incorrect kidney middle ware inputs",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleWare, function (req, res) {
  res.send("Your are healthy");
});

app.get(
  "/kidney-checkup",
  userMiddleWare,
  kidneyMiddleware,
  function (req, res) {
    res.send("Your kidney is healthy");
  }
);

app.get("/heart-checkup", userMiddleWare, function (req, res) {
  res.send("Your heart is healthy");
});

app.listen(3000);
