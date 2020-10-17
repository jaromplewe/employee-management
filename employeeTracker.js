var mysql = require("mysql");
var password = require("./password")
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: password,
  database: "employeeInfo_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runQuestions();
});

function runQuestions() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "Add employee",
        "Update employee",
        "Update employee role",
        "View departments",
        "Add department",
        "Add role",
        "View roles"
      ]
    })
    .then(function(answer) {
      switch(answer.action) {
        case "View all employees": readEmployees();
          break;
        
        case "Add employee": addEmployee();
          break;

        case "Update employee": updateEmployee();
          break;

        case "Update employee role": updateEmployeeRole();
          break;
          
        case "View departments": readDepartments();
          break;

        case "Add department": addDepartment();
          break;

        case "Add role": addRole();
          break;

        case "View roles": readRoles();
        break;
      }
    });
}

function readEmployees() {
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log("employee info: " + res);
    connection.end();
  });
}

