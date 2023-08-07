const mongoose = require("mongoose");

const connectDB = (url) => {
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
