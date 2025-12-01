/** @format */

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});


app.get(
  "/user/:id",
  (req, res, next) => {
    console.log("ID:", req.params.id);
    next();
  },
  (req, res, next) => {
    res.send("User Info");
  }
);

// handler for the /user/:id path, which prints the user ID
app.get("/user/:id", (req, res, next) => {
  res.send(req.params.id);
});
