const express = require("express");
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function (req, res) {
  res.render("index");
});

app.get("/Profile/:username", function (req, res) {
  res.send(`Welcome ${req.params.username} What's going on.....`);
});

app.get("/Profile/:username/:age", function (req, res) {
  res.send(`Welcome ${req.params.username} Your age is ${req.params.age}`);
});


app.listen(5000, function () {
  console.log("yes Running Perfectly!");
});
