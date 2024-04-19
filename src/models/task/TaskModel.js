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
export const updateTask = (id, type) => {
  return TaskSchema.findByIdAndUpdate(id, { type });
};

// D