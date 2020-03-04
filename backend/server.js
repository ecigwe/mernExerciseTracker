const mongoose = require("mongoose");

const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/users");

const cors = require("cors");

require("dotenv").config();
const uri = process.env.LOCAL_URI;
const express = require("express");

const app = express();

mongoose
  .connect("mongodb://localhost/exerciseTracker")
  .then(() => {
    console.log("connected to database");
  })
  .catch(err => {
    console.log(err.massage);
  });
app.use(cors());

app.use(express.json());

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
