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

  async getTodoById(id) {
    const todos = await this.getTodos();
    return todos.find((todo) => todo.id === id);
  }
}

export const todoService = new TodoService();
