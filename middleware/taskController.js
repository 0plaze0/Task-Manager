const getAllData = (req, res) => {
  res.send("all files send");
};

const createTask = (req, res) => {
  res.send("create task");
};
const getTask = (req, res) => {
  res.send("get task");
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllData, createTask, getTask, updateTask, deleteTask };
