import { addTodo } from "../services/todo-service.js";

init();

function init() {
  const form = document.querySelector(".todo-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = form.querySelector("input[type='text']").value;
    const priority = form.querySelector("input[type='number']").value;
    const dueDate = form.querySelector("input[type='date']").value;
    const complete = form.querySelector("#complete").checked;
    const description = form.querySelectorAll("input[type='text']")[1].value;

    const todo = {
      id: crypto.randomUUID(),
      name: title,
      priority: Number(priority),
      dueDate,
      complete,
      content: description,
      createdAt: new Date().toISOString(),
    };

    addTodo(todo);

    form.reset();

    window.location.href = "index.html";
  });
}
