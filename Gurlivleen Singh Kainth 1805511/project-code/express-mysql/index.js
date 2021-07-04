const express = require("express");
const cors = require("cors"); // Cross-Origin Resource Sharing
const mysql = require("mysql");

const { mysqlConfig } = require("./config");
const { routes } = require("./events");
const { tablesRoutes } = require('./tables');

const connection = mysql.createConnection({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.databaseName,
  insecureAuth: true,
});

connection.connect((error, response) => {
  if (error) {
    console.log(">>> Error: ", error);
  } else {
    // Creating Student Table if not exists in mysql
    connection.query(
      "create table if not exists student_info ( " +
        "id int NOT NULL PRIMARY KEY AUTO_INCREMENT, " +
        "course_code varchar(255) NOT NULL, " +
        "branch_code varchar(255) NOT NULL, " +
        "admission_year varchar(255), " +
        "student_name varchar(255) NOT NULL, " +
        "father_name varchar(255), " +
        "mother_name varchar(255), " +
        "semester varchar(255), " +
        "college_roll_no bigint NOT NULL, " +
        "university_roll_no bigint NOT NULL, " +
        "leet_non_leet varchar(255), " +
        "shift varchar(255), " +
        "aicte_rc varchar(255), " +
        "full_part_time varchar(255), " +
        "remarks varchar(255), " +
        "batch varchar(255) " +
        ") ENGINE=MyISAM DEFAULT CHARSET=latin1; ",
      (error, response) => {
        // if (response) {
        //   console.log("Table Created Successfuly student");
        // }
      }
    );

    // Creating User Tables
    connection.query(
      "create table if not exists users( " +
        "id int NOT NULL PRIMARY KEY AUTO_INCREMENT, " +
        "username varchar(255) NOT NULL, " +
        "department varchar(255) NOT NULL, " +
        "designation varchar(255), " +
        "name varchar(255) NOT NULL, " +
        "email varchar(255), " +
        "mobile varchar(255), " +
        "usertype varchar(255) " +
        ") ENGINE=MyISAM DEFAULT CHARSET=latin1;",
      (error, response) => {
        // if (response) {
        //   console.log("Table Created Successfuly user");
        // }
      }
    );

    // Creating Course Table
    connection.query(
      "create table if not exists course_code( " +
        "course_code_id varchar(255) NOT NULL, " +
        "course_name varchar(255) NOT NULL, " +
        "course_code varchar(255) " +
        ") ENGINE=MyISAM DEFAULT CHARSET=latin1;",
      (error, response) => {
        // if (response) {
        //   console.log("Table Created Successfuly course");
        // }
      }
    );

    // Inserting Values to Course Table
    // connection.query(
    //   "insert into course_code values " +
    //     '("1 ", "B.Tech. ", "1 "), ' +
    //     '("2 ", "M.Tech. ", "2 "), ' +
    //     '("3 ", "MBA ", "3 "), ' +
    //     '("4 ", "MCA ", "4 "), ' +
    //     '("5 ", "Ph.D. ", "6 "), ' +
    //     '("6 ", "B. Arch. ", "5 "), ' +
    //     '("7 ", "BCA ", "7 ");',
    //   (error, response) => {
    //     // if (response) {
    //     //   console.log("Values inserted successfuly to table course code");
    //     // }
    //   }
    // );
  }
});

const app = express()
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(routes(connection))
  .use(tablesRoutes(connection));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  res.send("App Running");
});

app.listen(PORT, () => {
  console.log("App Running");
});
