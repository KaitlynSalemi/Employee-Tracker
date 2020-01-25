DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NULL, 
    salary DECIMAL NULL,
    department_id INT NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL, 
    manager_id INT NULL
);

INSERT INTO department (name)
VALUES ("production"), ("development"), ("human resource"), ("marketing"), ("purchasing");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 200000, 1), ("COO", 30000, 2), ("CFO", 60000, 3), ("CIO", 750000, 4), ("CTO", 600000, 5);

INSERT INTO role (first_name, last_name, role_id, manager_id)
VALUES ("James", "Smith", 1, 6), ("Mary", "Johnson", 2, 7), ("Patricia", "Williamson", 3, 7), ("John", "Jones", 4, 6), ("Jennifer", "Miller", 5, 8);
