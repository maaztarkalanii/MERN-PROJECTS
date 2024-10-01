const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("hello guys ");
  next();
});

app.get("/", function (req, res) {
  res.send("This Mz Home page");
});

app.get("/Profile", function (req, res) {
  res.send("This is MZ page");
});

app.listen(3000);
