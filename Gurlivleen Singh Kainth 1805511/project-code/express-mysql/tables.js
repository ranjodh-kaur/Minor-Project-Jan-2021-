const express = require("express");
const { tables } = require("./config");

const tablesRoutes = (database) => {
  const router = express.Router();

  router.get("/branch-codes", (req, res, next) => {
    database.query(`select * from ${tables.branchCode}`, (error, response) => {
      res.send({ status: "ok", error: error, response: response });
    });
  });

  router.get("/users", (req, res, next) => {
    database.query(`select * from ${tables.users}`, (error, response) => {
      res.send({ status: "ok", error: error, response: response });
    });
  });

  router.get("/students", (req, res, next) => {
    database.query(`select * from ${tables.studentInfo}`, (error, response) => {
      res.send({ status: "ok", error: error, response: response });
    });
  });

  router.get("/course-codes", (req, res, next) => {
    database.query(`select * from ${tables.courseCode}`, (error, response) => {
      res.send({ status: "ok", error: error, response: response });
    });
  });

  return router;
};

module.exports = { tablesRoutes };