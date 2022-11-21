<template>
  <li class="todo">
    <span contenteditable @focus="getSpanTextBeforeChange($event)" @focusout="changeTodoText($event)"
      :class="todo.done && 'done'">{{ todo.text }}</span>
    <div class="actions">
      <i v-if="todo.done" @click="changeTodoStatus($event)" class="fas fa-undo button"></i>
      <i v-else @click="changeTodoStatus($event)" class="far fa-check button"></i>
      <i @click="deleteTodo($event)" class="fas fa-trash button"></i>
    </div>
  </li>
</template>

<script setup lang="ts">
import Todo from "@/models/Todo";
import { useTodoStore } from "@/store/todo";

type todoProps = {
  todo: Todo
}
const emit = defineEmits(["update-todos", "update-done-todos"]);
const props = defineProps<todoProps>();

const store = useTodoStore();
const { todos } = store;

const getTodoIndexFromButton = (event) => {
  return todos.findIndex((todo) => {
    // @ts-ignore 
    const todoStatus = window.location.pathname == "/done" ? todo.done == true : todo.done == false;

    // @ts-ignore
    return todo.text == event.target.parentNode.parentNode.innerText && todoStatus;
  });
};

const getTodoIndexFromSpan = (spanText) => {
  return todos.findIndex((todo) => {
    // @ts-ignore 
    const todoStatus = window.location.pathname == "/done" ? todo.done == true : todo.done == false;

    // @ts-ignore
    return todo.text == spanText && todoStatus;
  });
}

const getSpanTextBeforeChange = (event) => {
  spanTextBeforeChange.value = event.target.innerText;
};
const spanTextBeforeChange = ref("");

const changeTodoText = (event) => {
  const spanText = event.target.innerText;
  const todoIndex = getTodoIndexFromSpan(spanTextBeforeChange.value);
  store.changeTodoText(spanText, todoIndex);
  updateTodoList();
  event.target.innerText = spanText.trim();
};
const changeTodoStatus = (event) => {
  const todoIndex = getTodoIndexFromButton(event);
  store.changeTodoStatus(todoIndex);
  updateTodoList();
};

const deleteTodo = (event) => {
  const todoIndex = getTodoIndexFromButton(event);
  store.deleteTodoFromStore(todoIndex);
  updateTodoList();
};

const updateTodoList = () => {
  if (window.location.pathname == "/done") emit("update-done-todos");
  else emit("update-todos");
};
</script>

<style lang="postcss" scoped>
li.todo {
  @apply w-full mb-2 flex items-center justify-between;
}

.done {
  @apply line-through;
  opacity: 0.6;
}

.actions {
  @apply flex gap-2
}

.button {
  @apply bg-orange-200 p-3 rounded-lg cursor-pointer text-black hover:bg-orange-100;
}
</style>