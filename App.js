const express = require("express");
const app = express();

const port = 1000

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


app.get("/view", (req, res) => {
    let qry = "select * from students_name ";
    mysql.query(qry, (err, results) => {
        if (err) throw err
        else {
            res.render("view", { data: results });
            console.log(results)
        }

    });

    

});


app.get("/addstudent", (req, res) => {
    // fetching data from form
    const { name, phone, email, gender } = req.query

    // Sanitization XSS...
    let qry = "select * from students_name where emailid=? or phoneno=?";
    mysql.query(qry, [email, phone], (err, results) => {
        if (err)
            throw err
        else {

            if (results.length > 0) {
                res.render("add", { checkmesg: true })
            } else {

                // insert query
                let qry2 = "insert into students_name values(?,?,?,?)";
                mysql.query(qry2, [name, phone, email, gender], (err, results) => {
                    if (results > 0) {
                        res.render("add", { mesg: true })
                    }
                })
            }
        }
    })
});



app.get("/removestudent", (req, res) => {

    // fetch data from the form


    const { phone } = req.query;

    let qry = "delete from students_name where phoneno=?";
    mysql.query(qry, [phone], (err, results) => {
        if (err) throw err
        else {
            if (results > 0) {
                res.render("delete", { mesg1: true, mesg2: false })
            } else {

                res.render("delete", { mesg1: false, mesg2: true })

            }

        }
    });
});




//Create Server
app.listen(port, (err) => {
    if (err)
        throw err
    else
        console.log("Server is running at port %d:", port);
});