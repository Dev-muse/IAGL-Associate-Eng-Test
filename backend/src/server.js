const express = require("express");
const cors = require("cors");
const repository = require("./repository/todo");
const todoService = require("./service/todo")(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get("/api/todo", async (req, res) => {
    res.json(await todoService.getTodos());
  });
  server.post("/api/todo", async (req, res) => {
    try {
      const { task } = req.body;
      const newTodo = await todoService.addTodo(task);
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  server.delete("/api/todo/:id", async (req, res) => {
    try {
      const {id} = req.params;
      const deleted = await todoService.deleteTodo(id);
      console.log("deletedTask",deleted)
      res.json(deleted);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  server.put("/api/todo/:id", async (req, res) => {
    try {
      const {id} = req.params;
      const updates= req.body;
      const updated = await todoService.updateTodo(id, updates);
      console.log('updated',updated)
      res.json(updated);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  return server;
};
module.exports = server;
