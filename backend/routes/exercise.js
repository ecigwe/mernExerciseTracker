const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise.models");

router.route("/").get(async (req, res) => {
  try {
    const exercise = await Exercise.find();
    await res.json(exercise);
  } catch (ex) {
    res.status(400).json("Error: " + ex.message);
  }
});

router.route("/add").post(async (req, res) => {
  try {
    let newExercise = await new Exercise({
      username: req.body.username,
      description: req.body.description,
      duration: Number(req.body.duration),
      date: Date.parse(req.body.date)
    });
    await newExercise.save();
    await res.json("Exercise added");
  } catch (ex) {
    res.status(400).json("Error " + ex.message);
  }
});

async function addExercise() {}
module.exports = router;
