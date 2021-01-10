var mysql = require("mysql");
var password = require("./password")
var inquirer = require("inquirer");
var view = require("./lib/view");
var add = require("./lib/add");
var table = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "employeeInfo_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  exports.runQuestions();
});

exports.runQuestions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "EXIT"
        ]
      }
    ])
    .then(function (answer) {
      if(answer.choice === "View All Employees") {
        view.viewAllEmployees();
      } 
      else if(answer.choice === "Add Employee") {
        add.addEmployee();
      }
      else if(answer.choice === "EXIT") {
        connection.end();
        return
      }
      else if(answer.choice === "Update Employee Role") {
        update.updateRole();
      }
    });
}
