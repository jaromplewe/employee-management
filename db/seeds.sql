INSERT INTO department (dept_name) VALUES ('Back of House'), ('Front of House'), ('Management');
INSERT INTO company_role (title, salary, dept_id) VALUES
('VP of Engineering', 120000.00, 1), 
('Mobile app developer', 90000.00, 2),
('Web developer', 100000.00, 2),
('Javascript developer', 75000.00, 2),
('Junior web developer', 70000.00, 3),

INSERT INTO employees (first_name, last_name, emp_role_id, manager_id) VALUES
('Michael', 'Scott', 1, null),
('Jim', 'Halpert', 2, 1),
('Dwight', 'Schrute', 3, null);