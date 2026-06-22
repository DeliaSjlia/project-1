import { httpService } from "./http-service.js";

class TodoService {
  async createTodo(todo) {
    return httpService.ajax("POST", "/todos/", todo);
  }

  async getTodos() {
    return httpService.ajax("GET", "/todos/", undefined);
  }

  async getTodo(id) {
    return httpService.ajax("GET", `/todos/${id}`, undefined);
  }

  async deleteTodo(id) {
    return httpService.ajax("DELETE", `/todos/${id}`, undefined);
  }

  async updateTodo(todo) {
    return httpService.ajax("PUT", `/todos/${todo.id}`, todo);
  }
}

export const todoService = new TodoService();
