<template>
    <main>
        <slot name="addTodoForm" />
        <h2>
            <slot name="heading" />
        </h2>
        <ul>
            <slot />
        </ul>
    </main>
</template>

<style lang="postcss" scoped>
main {
  @apply py-6 px-2 flex flex-col items-center justify-start;
  height: calc(100vh - 7rem);
}

h2 {
  @apply text-5xl font-black mt-4 mb-4;
}

ul {
  @apply max-w-lg w-full text-center;
  overflow-y: scroll;
  max-height: 66vh;
}

ul::-webkit-scrollbar {
  display: none;
}

@media screen and (min-width: 460px) {
  main {
    height: calc(100vh - 4rem);
  }
}
</style>