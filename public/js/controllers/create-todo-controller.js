import { todoService } from "../services/todo-service.js";

init();

function init() {
  const form = document.querySelector(".todo-form");

  if (!form) return;

  form.addEventListener("submit", handleSubmit);
}

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const title = form.querySelector("#title").value.trim();
  const priority = Number(form.querySelector("#priority").value || 1);
  const dueDate = form.querySelector("#dueDate").value;
  const complete = form.querySelector("#complete").checked;
  const description = form.querySelector("#description").value;

  if (!title || !dueDate) {
    alert("Please fill in both title and due date.");
    return;
  }

  const todo = {
    name: title,
    priority,
    dueDate,
    complete,
    content: description,
    createdAt: new Date().toISOString(),
  };

  try {
    await todoService.createTodo(todo);
    form.reset();
    window.location.href = "index.html";
  } catch (err) {
    console.error("Failed to create todo:", err);
    alert("Could not create todo");
  }
}
