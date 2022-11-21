import { defineStore } from "pinia";
import Todo from "@/models/Todo";

export const useTodoStore = defineStore("todo", {
  state: () => {
    const todos: Todo[] = [];
    return { todos };
  },
  actions: {
    addTodoInStore(text: string, done: boolean): void {
      this.todos.push({ text: text, done: done });
    },
    deleteTodoFromStore(todoIndex: number) {
      this.todos.splice(todoIndex, 1);
    },
    changeTodoStatus(todoIndex: number) {
      this.todos[todoIndex].done = !this.todos[todoIndex].done;
    },
    changeTodoText(newText: string, todoIndex: number) {
      if (newText) this.todos[todoIndex].text = newText.trim();
      else this.todos[todoIndex].text = "No empty todos!";
    },
    getTodosFromLocalStorage() {
      const todosInStorage = localStorage.getItem("todos");
      if (process.client) {
        if (todosInStorage) this.todos = JSON.parse(todosInStorage);
        else
          localStorage.setItem(
            "todos",
            JSON.stringify([{ text: "Todo Exemple", done: false }])
          );
      }
    },
    updateTodosInLocalStorage() {
      if (process.client) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
  },
  getters: {
    getTodos() {
      return this.todos.filter((todo) => !todo.done) || [];
    },
    getDoneTodos() {
      return this.todos.filter((todo) => todo.done) || [];
    },
  },
});
