const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

// Getting all
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getTodo, (req, res) => {
  res.json(res.todo);
});

module.exports = router;
