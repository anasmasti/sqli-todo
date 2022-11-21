<template>

  <Head>
    <Title>SQLI Todo</Title>
  </Head>
  <NuxtPage />
</template>

<script lang="ts" setup>
import { useTodoStore } from "./store/todo";
useHead({
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;900&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Monoton&display=swap",
      rel: "stylesheet",
    },
    {
      rel: "stylesheet",
      href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
      crossorigin: 'anonymous',
    },
    { rel: "icon", type: "image/png", href: "/favicon.png" },
  ],
});

onBeforeMount(() => useTodoStore().getTodosFromLocalStorage());
</script>

