
const express = require("express");
const app = express();

app.get("/", function(req, res){
res.send("This is Home Pageeeee")
});

app.get("/Profile", function(req, res){
    res.send("This is Profile Page")
    });

    app.listen(3000);
