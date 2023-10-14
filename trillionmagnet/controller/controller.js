const Tasks = require(".././server/model/model");
const asyncWrapper = require("../middleware/async-wrapper");
const CreateCustomError = require("../errors/errors-CustomApi");

const getAllMessage = asyncWrapper(async (req, res) => {
  const tasks = await Tasks.find({});
  res.status(200).json(tasks);
});

const createMessage = asyncWrapper(async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json(task);
});

const getMessage = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOne({ _id: taskID });
  if (!task) {
    return next(CreateCustomError(`No task with the Id : ${taskID}`));
  }
  res.status(200).json(task);
});

const deleteMessage = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(CreateCustomError(`No task with the Id : ${taskID}`));
  }
  res.status(200).json({ task });
});

const updateMessage = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(CreateCustomError(`No task with the Id : ${taskID}`));
  }

  res.status(200).json(task);
});

module.exports = {
  getAllMessage,
  createMessage,
  getMessage,
  updateMessage,
  deleteMessage,
};
