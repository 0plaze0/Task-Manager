const express = require("express");
const router = express.Router();
const {
  getAllData,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} = require("./../middleware/taskController");

router.route("/").get(getAllData).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
