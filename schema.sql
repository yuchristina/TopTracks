DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  url varchar(255) NOT NULL,
  cover varchar(255) NOT NULL,
  album varchar(255) NOT NULL,
  artist varchar(255) NOT NULL,
  queryname varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);




/*  Execute this file from the command line by typing:
 *    mysql -u student < schema.sql
 *  to create the database and the tables.*/
