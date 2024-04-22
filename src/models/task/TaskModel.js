//db queries go inside this file
import TaskSchema from "./TaskSchema.js";

// C
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

//R

export const getTasks = () => {
  return TaskSchema.find();
};

// U
export const updateTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type });
};

// D
export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};
