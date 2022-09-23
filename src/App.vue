<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import Store from "@/store";

Store.useProvider();
</script>

<style scoped>
</style>
