import { todoService } from "../services/todo-service.js";

let sortBy = null;
let sortDirection = "none";

init();

function init() {
  setupSorting();
  setupDelete();
  render();
}

async function render() {
  const template = document.querySelector("#todo-template");

  if (!template) return;

  const todos = await todoService.getTodos();

  const sortedTodos = sortTodosLocal(todos);

  const compiled = Handlebars.compile(template.innerHTML);

  const html = compiled({
    todos: sortedTodos,
  });

  document.querySelector(".todo-list").innerHTML = html;
}

function sortTodosLocal(todos) {
  if (!sortBy || sortDirection === "none") return todos;

  return [...todos].sort((a, b) => {
    let valueA = a[sortBy] ?? "";
    let valueB = b[sortBy] ?? "";

    if (valueA < valueB) {
      return sortDirection === "asc" ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortDirection === "asc" ? 1 : -1;
    }

    return 0;
  });
}

function setupSorting() {
  const buttons = document.querySelectorAll(".filter-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const clicked = button.dataset.sort;

      if (clicked === sortBy) {
        sortDirection =
          sortDirection === "none"
            ? "asc"
            : sortDirection === "asc"
              ? "desc"
              : "none";
      } else {
        sortBy = clicked;
        sortDirection = "asc";
      }

      buttons.forEach((btn) => {
        btn.dataset.sortDirection = "none";
      });

      button.dataset.sortDirection = sortDirection;

      render();
    });
  });
}

function setupDelete() {
  const list = document.querySelector(".todo-list");

  list.addEventListener("click", async (event) => {
    const id = event.target.dataset.id;
    const action = event.target.dataset.action;

    if (action !== "delete") return;

    await todoService.deleteTodo(id);
    render();
  });
}
