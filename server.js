var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "rootroot",

  database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`connected as Id ${connection.threadId}.`);
    whatDo();
})

function whatDo(){

}
