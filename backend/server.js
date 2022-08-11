const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://mern_user:FNpJ6zQHIJfEi3L6@cluster0.87trix4.mongodb.net/nQueens");

app.use("/", require('./routes/solutionRoute'));

app.listen(5000, function() {
   console.log("Express server is running on port 5000!");
});