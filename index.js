const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const studentRouter = require("./routes/studentRouter");
const userRouter = require("./routes/userRouter");

const app = express();

const data = [
  {
    id: "1",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    id: "2",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    id: "3",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true,
  },
];

// console.log('====================================');
// console.log(" middleWares");
// console.log('====================================');

app.use(express.json());

app.use(cookieParser());

// req.url  => students/react

app.use("/students", studentRouter);
app.use("/users", userRouter);
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "server error inside middleware error handler",
    stats: 500,
    err,
  });
});

// app setting
app.set("template engine", "ejs");

// console.log('====================================');
// console.log(" routes");
// console.log('====================================');

// console.log('====================================');
// console.log(" running server");
// console.log('====================================');

const port = process.env.Port || 3000;

mongoose
  .connect(
    "mongodb+srv://ahmadelshrkawy232:0itK9Fpq1jQKLjX4@cluster0.x4frp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("my server is running on port" + port);
});

// connect
// shcema
// create Model  =>

// 0itK9Fpq1jQKLjX4
//ahmadelshrkawy232
