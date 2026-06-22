const todos = [];

export const todoController = {
  getTodos(req, res) {
    res.json(todos);
  },

  createTodo(req, res) {
    const todo = {
      id: crypto.randomUUID(),
      ...req.body,
    };

    todos.push(todo);

    res.status(201).json(todo);
  },

  getTodo(req, res) {
    const todo = todos.find((todo) => todo.id === req.params.id);

    res.json(todo);
  },

  deleteTodo(req, res) {
    const index = todos.findIndex((todo) => todo.id === req.params.id);

    if (index >= 0) {
      todos.splice(index, 1);
    }

    res.sendStatus(204);
  },

  clearTodos(req, res) {
    todos.length = 0;
    res.sendStatus(204);
  },
};
