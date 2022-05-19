const mysql = require("mysql")
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password:"",
    database: "student_list",
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connection created..!!");
});

module.exports.con = con;