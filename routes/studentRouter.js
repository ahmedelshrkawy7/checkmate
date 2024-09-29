const express = require("express");
const {
  getStudent,
  createStudent,
  getAllStudent,
  getOneStudent,
  updateStudent,
  deleteStudent,
  getStudentByName,
} = require("../controller/studentController");

const studentRouter = express.Router();

studentRouter.post("/", createStudent);
studentRouter.get("/", getAllStudent);
studentRouter.get("/:id", getOneStudent);
studentRouter.put("/:id", updateStudent);
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;
