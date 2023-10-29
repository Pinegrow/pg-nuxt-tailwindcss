<script setup lang="ts">
  //...
</script>

<template>
  <!-- <div class="container mx-auto"> -->
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
  >
    <!-- <NavBar class="fixed shadow z-20 bg-white dark:bg-neutral-950" /> -->
    <main class="mt-24 shadow">
      <slot />
    </main>
    <!-- <TheFooter /> -->
  </div>
  <!-- </div> -->
</template>
<style></style>
