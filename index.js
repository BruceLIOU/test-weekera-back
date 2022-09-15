const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(formidable({ multiples: true }));
app.use(cors());

const Scores = require("./models/scores");

/* Route qui permet de calculer les possibilités */
app.get("/af_scores/:scoreMaxX/:scoreMaxY", async (req, res) => {
  try {
    const { scoreMaxX, scoreMaxY } = req.params;
    const result = Scores.findPossibilityFromScores(scoreMaxX, scoreMaxY);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.status(201).json("Welcome to US FOOTBALL API");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found !" });
});

app.listen(process.env.PORT || 3005, () => {
  console.log(`🟢 Server started on port ${process.env.PORT}`);
});
