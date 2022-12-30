<template>
  <ul v-if="ales" class="list-ales">
    <li v-for="ale in ales">
      <h1>{{ ale.title }}</h1>
      <h2>{{ ale.brewery }}</h2>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import api from "@/api/ales";

const ales = ref(null);

onMounted(() => {
  api.ales().then((response) => {
    ales.value = response.data;
  });
});
</script>

<style scoped></style>
