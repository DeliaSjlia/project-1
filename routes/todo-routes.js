import express from "express";

const router = express.Router();

import { todoController } from "../controller/todo-controller.js";

router.get("/", todoController.getTodos);

router.post("/", todoController.createTodo);

router.get("/:id", todoController.getTodo);
router.delete("/:id", todoController.deleteTodo);
router.delete("/", todoController.clearTodos);

router.use((req, res, next) => {
  next();
});

export const todoRoutes = router;
