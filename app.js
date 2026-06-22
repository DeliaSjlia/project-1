import express from "express";
import { todoRoutes } from "./routes/todo-routes.js";

export const app = express();

app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  next();
});

app.use(express.json());
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo API running");
});

app.get("/test", (req, res) => {
  res.send("API works");
});
