const express = require("express");
const router = express.Router();
// router.get("/", (req, res) => {
// res.status(200).send("Welcome to the Router pages")
// });
router.route("/").get((req, res) => {
    res.status(200).send("Welcome This is my First Project")
    });
    router.route("/Register").get((req , res) =>{
res.status(200).send("Welcome this is Register page")
    });
module.exports = router;
