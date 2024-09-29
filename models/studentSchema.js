const mongoose = require("mongoose");

const studenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: String,
    age: {
      type: Number,
      validate: {
        validator: (val) => val < 30,
        message: (props) =>
          `you entered ${props.value} but age must be less than 30`,
      },
    },
    track: {
      type: String,
      default: "react",
    },
    sofraa: String,
  },
  { timestamps: true }
);

const studentModel = mongoose.model("Student", studenSchema);

module.exports = studentModel;
