const express = require("express");
const app = express();

var users = [
  {
    name: "Snehal",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  let johnKidnyes = users[0].kidneys;
  let numberOfKidneys = johnKidnyes.length;
  let healthyUsers = 0;

  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidnyes[i].healthy) {
      healthyUsers = healthyUsers + 1;
    }
  }

  let unhealtyUsers = numberOfKidneys - healthyUsers;

  res.json({
    numberOfKidneys,
    healthyUsers,
    unhealtyUsers,
  });
});

app.post("/", function (req, res) {
  let isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  return res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({});
});

app.delete("/", function (req, res) {
  //return 411
  //only if atleast one unhealthy kidney is there do this, else return 411

  if (isThereAtLeastOneUnhealthyKidney()) {
    let newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }

    users[0].kidneys = newKidneys;
    res.json({
      msg: "Deleted",
    });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function isThereAtLeastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }

  return atleastOneUnhealthyKidney;
}

app.listen(3000);
