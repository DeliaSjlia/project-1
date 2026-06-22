import express from "express";
import { todoRoutes } from "./routes/todo-routes.js";

export const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use(express.static("public"));

app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  next();
});

app.use(express.json());
app.use("/todos", todoRoutes);

app.get("/", function (req, res) {
  res.sendFile("html/index.html", { root: "public" });
});
