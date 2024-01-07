const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
  },
  details: {
    type: String,
  },
  dueDate: {
    type: String,
  },
  priority: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Homework", homeworkSchema);
