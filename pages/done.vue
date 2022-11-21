<template>
  <NuxtLayout name="main">
    <template #heading><span>Done Todos</span></template>
    <Todo v-for="todo in doneTodos || []" :key="todo.text" :todo="todo" @update-done-todos="updateDoneTodos" />
    <p v-if="showMessage" class="no-todos">There's no done todo.</p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/store/todo";
onBeforeMount(() => changeShowMessage());

const store = useTodoStore();
const doneTodos = ref(store.getDoneTodos);

const addDoneTodo = ({ text, done }) => {
  store.addTodoInStore(text, done);
  updateDoneTodos();
};

const showMessage = ref(false);

const changeShowMessage = () =>
  (showMessage.value = doneTodos.value.length ? false : true);

const updateDoneTodos = () => {
  doneTodos.value = store.getDoneTodos;
  changeShowMessage();
  store.updateTodosInLocalStorage();
};
</script>

