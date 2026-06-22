import { httpService } from "./http-service.js";

class TodoService {
  async createTodo(todo) {
    return httpService.ajax("POST", "/todos", todo);
  }

  async getTodos() {
    return httpService.ajax("GET", "/todos");
  }

  async getTodo(id) {
    return httpService.ajax("GET", `/todos/${id}`);
  }

  async deleteTodo(id) {
    return httpService.ajax("DELETE", `/todos/${id}`);
  }

  async updateTodo(todo) {
    return httpService.ajax("PUT", `/todos/${todo.id}`, todo);
  }
}

export const todoService = new TodoService();
