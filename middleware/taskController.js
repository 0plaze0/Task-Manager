const Task = require("../model/TaskSchema");

const getAllData = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task); //ok
  } catch (err) {
    res.status(500).json({ msg: err }); //server Error
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task)
      return res.status(404).json({ msg: `No task with id ${taskID}` });
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllData, createTask, getTask, updateTask, deleteTask };
