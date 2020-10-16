DROP DATABASE IF EXISTS employeeInfo_db;
CREATE database employeeInfo_db;

USE employeeInfo_db;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30) 
  PRIMARY KEY (id)
);

CREATE TABLE employee_role (
  id INT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(130),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

SELECT * FROM employeeInfo_db;
