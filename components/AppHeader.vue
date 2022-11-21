<template>
  <header>
    <div class="base-container">
      <h1><span class="logo">SQLI</span> <span>Todo</span></h1>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Todos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/done">Recently done</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="postcss" scoped>
header {
  @apply w-full bg-orange-600;
}

.base-container {
  @apply max-w-4xl mx-auto text-white flex flex-col justify-around items-center h-28 py-3;
  @apply sm:h-16 sm:flex-row;
}

h1 {
  @apply text-2xl;
}

ul {
  @apply flex justify-between items-center gap-5;
}

li,
a {
  @apply text-lg;
}

.router-link-active {
  @apply bg-orange-400 font-bold text-white p-2 rounded-xl;
}
</style>