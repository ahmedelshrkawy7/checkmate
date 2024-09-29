const userModel = require("../models/userSchema");

const catchError = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
};

const createUser = catchError(async (req, res, next) => {
  const createdUser = await userModel.create({
    email: "ahmed2@yahoo.com",
    password: " 1234567 ",
  });

  res.status(201).json({
    createdUser,
  });
});

module.exports = createUser;
