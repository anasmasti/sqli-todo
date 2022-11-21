<template>
  <NuxtLayout name="main">
    <template #addTodoForm>
      <AddTodo @add-todo="addTodo" />
    </template>
    <template #heading><span>Todo List</span></template>
    <Todo v-for="todo in todos || []" :key="todo.text" :todo="todo" @update-todos="updateTodos" />
    <p v-if="showMessage" class="no-todos">Please add todo.</p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/store/todo";

onBeforeMount(() => changeShowMessage());

const store = useTodoStore();
const todos = ref(store.getTodos);

const addTodo = ({ text, done }) => {
  store.addTodoInStore(text, done);
  updateTodos();
};

const showMessage = ref(false);

const changeShowMessage = () =>
  (showMessage.value = todos.value.length ? false : true);

const updateTodos = () => {
  todos.value = store.getTodos;
  changeShowMessage();
  store.updateTodosInLocalStorage();
};
</script>