<template>
  <div class="container mx-auto">
    <h1>{{ store.count }}</h1>
    <button @click="store.increment()" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
  Increment
</button>
</div>
</template>

<script setup>
    import { store } from "./store.js";
</script>
