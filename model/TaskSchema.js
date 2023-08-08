const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide a name for the task"],
    trim: true,
    maxlength: [20, "The name must be 20 Character long"],
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
