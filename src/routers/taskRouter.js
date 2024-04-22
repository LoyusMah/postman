import express from "express";
import { idGenerator } from "../utils.js";
import {
  insertTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../models/task/TaskModel.js";
const router = express.Router();

let fakeDb = [];

//controllers

//get data
router.get("/", async (req, res) => {
  //db query to get the data
  const result = await getTasks();
  console.log(result);
  res.json(result);
});

//Post data
router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    result?._id
      ? res.json({
          message: "New task has been added",
        })
      : res.json({
          message: "Failed to add new data",
        });
  } catch (error) {
    console.log(error);
  }
  // const id = idGenerator()
  // fakeDb.push({ ...req.body, id });
});

//update task
router.patch("/", async (req, res) => {
  const { _id, type } = req.body;
  console.log(_id, type);
  // result?._id ? res.json({
  //   message:"updated"

  // })

  const result = await updateTask(id, type);
  res.json({
    messaeg: "Your task has been updated",
  });
});
//delete task
router.delete("/", async (req, res) => {
  try {
    const { _id } = req.body;

    const result = await deleteTask(_id);
    result?._id
      ? res.json({
          messaeg: "Your task has been updated",
        })
      : res.json({
          messaeg: "unable to delete try later",
        });
  } catch (error) {
    console.log(error);
  }
});

export default router;
