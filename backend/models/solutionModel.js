const mongoose = require("mongoose");

const solutionSchema = {
   sol: [],
   solved: Boolean,
}

const Solution = mongoose.model("Solution", solutionSchema);

module.exports = Solution;