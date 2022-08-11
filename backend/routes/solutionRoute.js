const express = require("express");
const router = express.Router();
const Solution = require("../models/solutionModel");

router.route("/").post((req, res) => {
   const solution = req.body.sol
   const solved = req.body.solved
   const newSolution = new Solution({
      solution, 
      solved
   });
   newSolution.save();
});

module.exports = router;