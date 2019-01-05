CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
ID INT AUTO_INCREMENT NOT NULL,
Burger_name VARCHAR(100) not null,
Devoured BOOLEAN NOT NULL,
PRIMARY KEY (ID)
);
