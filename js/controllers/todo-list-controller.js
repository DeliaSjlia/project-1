import { getTodos, deleteTodo, sortTodos } from "../services/todo-service.js";

let sortBy = null;

let sortDirection = "none";

initialize();

function initialize() {
  render();

  setupSorting();

  setupDelete();
}

function render() {
  const template = document.querySelector("#todo-template");

  if (!template) {
    return;
  }

  const compiled = Handlebars.compile(template.innerHTML);

  const html = compiled({
    todos: sortTodos(sortBy, sortDirection),
  });

  document.querySelector(".todo-list").innerHTML = html;
}

function setupDelete() {
  document.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (action !== "delete") {
      return;
    }

    deleteTodo(event.target.dataset.id);

    render();
  });
}

function setupSorting() {
  const buttons = document.querySelectorAll(".filter-item");

  buttons.forEach((button) => {
    button.addEventListener(
      "click",

      () => {
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
      },
    );
  });
}
