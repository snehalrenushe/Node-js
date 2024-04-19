const express = require("express");
const zod = require("zod");
const app = express();

// const schema = zod.array(zod.number());

// {
//   email: string => email
//   password: atleast 8 letters
//   country: "IN", "US"
// }

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

// validateInput({
//   email: "snehalrenushe11@gmail.com",
//   password: "123456789"
// })

app.post("/login", function (req, res) {
  const response = validateInput(req.body);
  console.log(response);

  if (!response) {
    res.json({
      msg: "Inputs are wrong",
    });
  } else {
    res.json({
      msg: response,
    });
  }
});

app.listen(3000);
