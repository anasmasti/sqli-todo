<template>
  <form @submit.prevent="addTodo">
    <input v-model="inputText" type="text" placeholder="Your todo.." />
    <button type="submit">Add New Todo</button>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(["add-todo", "add-done-todo"]);
const inputText = ref("");

const addTodo = () => {
  const text = inputText.value.trim();
  const isInTheDonePage = window.location.pathname == "/done" ? true : false;

  if (text.length) {
    if (isInTheDonePage) emit("add-done-todo", { text: text, done: true });
    else emit("add-todo", { text: text, done: false });
  }
  inputText.value = "";
};
</script>

<style lang="postcss" scoped>
form {
  @apply flex items-center justify-center w-full mb-6 gap-1;
}

input {
  @apply p-3 border bg-gray-50 border-gray-300 rounded-xl placeholder:text-gray-300 placeholder:font-bold;
}

button {
  @apply bg-orange-400 p-3 rounded-xl text-white font-bold;
}
</style>
