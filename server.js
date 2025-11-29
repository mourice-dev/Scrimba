/** @format */

import express from "express";
import { people } from './data.js'

// const celebrity = {
//   type: "action hero",
//   name: "nshut maurice",
// };
const PORT = 8000;

const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is running. Go to /api to see data.");
// });

app.get("/api", (req, res) => {
  console.log(req.query);
  res.json(people);
});


app.listen(PORT, () => {
  console.log(`server connected! ${PORT}`);
});
