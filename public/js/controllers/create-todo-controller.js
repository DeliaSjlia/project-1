import { todoService } from "../services/todo-service.js";

const params = new URLSearchParams(window.location.search);
const todoId = params.get("id");

let isEditMode = false;
let originalTodo = null;

init();

async function init() {
  const form = document.querySelector(".todo-form");

  if (!form) return;

  form.addEventListener("submit", handleSubmit);

  await loadTodoIfEditing(form);
}

function updateUI() {
  const submitButton = document.querySelector("#submit-button");
  const title = document.querySelector("h1");

  if (isEditMode) {
    submitButton.textContent = "Update To Do";
    title.textContent = "Edit To Do";
    document.title = "Edit To Do";
  } else {
    submitButton.textContent = "Create To Do";
    title.textContent = "Create To Do";
    document.title = "Create To Do";
  }
}

async function loadTodoIfEditing(form) {
  if (!todoId) return;

  isEditMode = true;

  originalTodo = await todoService.getTodoById(todoId);
  if (!originalTodo) return;

  form.querySelector("#title").value = originalTodo.name;
  form.querySelector("#priority").value = originalTodo.priority;
  form.querySelector("#dueDate").value = originalTodo.dueDate;
  form.querySelector("#complete").checked = originalTodo.complete;
  form.querySelector("#description").value = originalTodo.content;

  updateUI();
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
    createdAt: isEditMode ? originalTodo.createdAt : new Date().toISOString(),
  };

  try {
    if (isEditMode) {
      await todoService.updateTodo({
        ...todo,
        id: todoId,
      });
    } else {
      await todoService.createTodo(todo);
    }

    form.reset();
    window.location.href = "index.html";
  } catch (err) {
    console.error("Failed to save todo:", err);
    alert("Could not save todo");
  }
}
