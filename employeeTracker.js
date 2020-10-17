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
  console.log("connected as id " + connection.threadId + "\n");
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
        "Add department",
        "View departments",
        "Add role",
        "View roles"
      ]
    })
    .then(function(answer) {
      console.log("answer: " + JSON.stringify(answer));
    });
}
