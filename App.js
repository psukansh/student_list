const express = require("express");
const app = express();

const port = 2727

const mysql = require("./connection").con
    // configuration
app.set("view engine", "hbs");
app.set("views", "./view")

app.use(express.static(__dirname + "/public"))

// app.use(express.urlencoded())
// app.use(express.json())
// Routing

app.get("/", (req, res) => {
    res.render("index")

});



app.get("/add", (req, res) => {
    res.render("add")

});



app.get("/delete", (req, res) => {
    res.render("delete")

});



//Create Server
app.listen(port, (err) => {
    if (err)
        throw err
    else
        console.log("Server is running at port %d:", port);
});