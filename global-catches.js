const express = require("express");

const app = express();

app.get("/", function (req, res) {
  console.log(req.body.kidneys.length);

  res.json({
    msg: "Done",
  });
});

app.use(function (err, req, res, next) {
  res.send({
    msg: "Internal server error",
  });
});

app.listen(3000);
