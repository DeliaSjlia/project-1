import { getStorage, saveStorage } from "./data/storage.js";

export function getTodos() {
  return getStorage();
}

export function addTodo(todo) {
  const todos = getTodos();

  todos.push(todo);

  saveStorage(todos);
}

export function deleteTodo(id) {
  const todos = getTodos();

  const updatedTodos = todos.filter((todo) => todo.id !== id);

  saveStorage(updatedTodos);
}

export function updateTodo(updatedTodo) {
  const todos = getTodos();

  const updatedTodos = todos.map((todo) => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo;
    }

    return todo;
  });

  saveStorage(updatedTodos);
}

export function getTodoById(id) {
  return getTodos().find((todo) => todo.id === id);
}

export function sortTodos(sortBy, direction) {
  const todos = [...getTodos()];

  if (!sortBy || direction === "none") {
    return todos;
  }

  todos.sort((a, b) => {
    let valueA = a[sortBy];

    let valueB = b[sortBy];

    if (valueA < valueB) {
      return direction === "asc" ? -1 : 1;
    }

    if (valueA > valueB) {
      return direction === "asc" ? 1 : -1;
    }

    return 0;
  });

  return todos;
}
