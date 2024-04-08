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
    password: zod.string().min(8)
  })

  const response = schema.safeParse(obj);
  console.log(response);
}

validateInput({
  email: "snehalrenushe11@gmail.com",
  password: "123456789"
})
// app.listen(3000);
