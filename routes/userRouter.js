const express = require("express");
const createUser = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/", createUser);
// userRouter.get("/", getAllStudent);

module.exports = userRouter;
