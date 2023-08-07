const express = require("express");
const app = express();
const connectDB = require("./db/connectionDB");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

connectDB(process.env.DB_URI);

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/v1/tasks", require("./routes/tasks"));
mongoose.connection.once("open", () => {
  console.log("Connected to DB");

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});
