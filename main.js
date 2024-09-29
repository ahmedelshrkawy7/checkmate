const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

//  get / post / put / delete

let arr = ["ahmed", "mohamed"];

// ///////////////////////  midllewares    =>            M V C  => model / view /  controller

app.use(express.json()); // builtIn
app.use(express.urlencoded({ extended: true })); // builtin
app.use(express.static("public"));
app.use((req, res, nxt) => {
  console.log("req");
  nxt();
}); // req , res , next
app.use(cookieParser());

app.param("id", (req, res, next, val) => {
  console.log(val);
  req.id = val;

  next();
});

////////////////////////   routes

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/index.html"));
}); // path   =>   functon  => Route handler

app.get("/welcome.html", (req, res, next) => {
  console.log(" first middleware");
});

app.get("/products/:id", (req, res, next) => {
  console.log(req.params);
  console.log(req.id, "this is req.id");

  res.send("fsdf");
});
app.delete("/products/:id", (req, res, next) => {
  console.log(req.params);
  res.send("fsdf");
});
app.put("/products/:id", (req, res, next) => {
  const { id } = req.params;
  res.send("fsdf");
});

app.get("/welcome.html", (req, res, next) => {
  console.log(req.query);

  res.send("welcome");
});

app.post("/welcome.html", (req, res, next) => {
  console.log(req.body);

  res.cookie("firstName", req.body.firstName);
  res.cookie("lastName", req.body.lastName);

  // Buffer

  res.send("welcome post func");
});

app.post("/", (req, res, next) => {
  // req.body  //   =>  express.json()

  const myObj = {
    id: arr.length + 1,
    ...req.body,
  };

  arr.push(myObj);

  res.status(201).json({
    message: "product added succefully",
    data: myObj,
  });
});

app.get("/abc", (req, res, next) => {
  console.log(req.cookies);

  res.send("abc");
});

app.listen(5000, () => {
  console.log("server is rinning");
});

// console.log(__dirname);  folder project
// console.log(__filename);
