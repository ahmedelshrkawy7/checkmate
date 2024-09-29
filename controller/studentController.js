const studentModel = require("../models/studentSchema");

// get all

const getAllStudent = async (req, res) => {
  let allStudents;
  const { name } = req.body;
  if (name) {
    allStudents = await studentModel.find({ name: name });
  } else {
    allStudents = await studentModel.find();
  }

  res.json({
    message: "all Students",
    allStudents,
  });
};

// get one


const getOneStudent = async (req, res) => {
  const { id, name } = req.params;

  console.log("🚀 ~ getOneStudent ~ id:", id);
  const oneStudent = await studentModel.findById(id);

  res.json({
    message: "all Students",
    oneStudent,
  });
};
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ~ getOneStudent ~ id:", id);
  const deletedStudent = await studentModel.findByIdAndDelete(id);
  res.json({
    message: " Student deleted",
    deletedStudent,
  });
};
const updateStudent = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ~ getOneStudent ~ id:", id);
  const updatedStudent = await studentModel.updateOne(
    { _id: id },
    { name: "soha" }
  );

  res.json({
    message: " Student updated",
    updatedStudent,
  });
};

const createStudent = async (req, res) => {
  console.log(req.body);

  const { name, age, track } = req.body;

  //   const createdStudent = new studentModel({
  //     name: "somya",
  //     age: 50,
  //     track: "react",
  //   });

  //   await createdStudent.save();

  const createdStudent = await studentModel.create({
    name,
    age,
    track,
  });

  //

  res.status(201).json({
    message: "new sutudent is created",
    createdStudent,
  });
};

module.exports = {
  getAllStudent,
  createStudent,
  getOneStudent,
  updateStudent,
  deleteStudent,
};
