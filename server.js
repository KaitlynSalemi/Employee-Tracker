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
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
              "Add a Department, Role, or Employee?",
              "View the data for Departments, Roles, or Employees?",
              "Update Employee Roles"
            ]
        })
        .then(function(answer) {
            // console.log(answer);
            
            switch (answer.action) {
                case "Add a Department, Role, or Employee?":
                addWhat();
                break;
        
                case "View the data for Departments, Roles, or Employees?":
                viewWhat();
                break;
        
                case "Update Employee Roles":
                updateRoles();
                break;
            }
        });
}

function addWhat(){
    inquirer
        .prompt([
            {
                name: "add",
                type: "rawlist",
                message: "What would you like to add?",
                choices: [
                    "Department",
                    "Role",
                    "Employee",
                ]
            },
            {
                when: (answers) => answers.add === "Department",
                name: "department",
                type: "input",
                message: "Department Name: "
            },
            {
                when: (answers) => answers.add === "Role",
                name: "roleTitle",
                type: "input",
                message: "Role Title: "
            },
            {
                when: (answers) => answers.add === "Role",
                name: "salary",
                type: "input",
                message: "Salary for that role: "
            },
            {
                when: (answers) => answers.add === "Role",
                name: "departmentID",
                type: "input",
                message: "Department id: "
            },
            {
                when: (answers) => answers.add === "Employee",
                name: "firstname",
                type: "input",
                message: "First Name: "
            },
            {
                when: (answers) => answers.add === "Employee",
                name: "lastname",
                type: "input",
                message: "Last Name: "
            },
            {
                when: (answers) => answers.add === "Employee",
                name: "roleID",
                type: "input",
                message: "Role ID: "
            },
            {
                when: (answers) => answers.add === "Employee",
                name: "managerID",
                type: "input",
                message: "Manager ID: "
            }
        ])
        .then(function(add){
            console.log(add);
              
        })
}

function viewWhat(){
    inquirer
        .prompt({
            name: "view",
            type: "rawlist",
            message: "What data would you like to view?",
            choices: [
              "Departments",
              "Roles",
              "Employees"
            ]
        })
        .then(function(answer){
            console.log(answer);
            
        })
}

function updateRoles(){
    inquirer
        .prompt ([
            {
                name: "updateRole",
                type: "rawlist",
                message: "What is the id of the role you would like to update?",
                choices: ["1", "2", "3", "4", "5"]
            },
            {
                name: "newRole",
                type: "input",
                message: "What is the Role Title you would like to change is to?"
            }
        ])
        .then(function(answer){
            console.log(answer);
            
        })
}