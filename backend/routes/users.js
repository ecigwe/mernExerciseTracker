const express = require("express");
const router = express.Router();
const User = require("../models/user.models");

router.route("/").get(async (req, res) => {
  try {
    const users = await User.find();
    await res.json(users);
  } catch (ex) {
    res.status(400).json("Error: " + ex.message);
  }
});

router.route("/add").post(async (req, res) => {
  try {
    let newUser = new User({
      username: req.body.username
    });
    await newUser.save();
    await res.json("User added");
  } catch (ex) {
    res.status(400).json("Error " + ex.message);
  }
});
module.exports = router;
