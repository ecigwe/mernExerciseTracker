const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const uri = process.env.LOCAL_URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to database");
  })
  .catch(err => {
    console.log(err.massage);
  });
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
