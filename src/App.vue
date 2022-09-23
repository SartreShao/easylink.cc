<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import Store from "@/store";

Store.useProvider();
</script>

<style scoped lang="scss">
body {
  margin: 0;
}
</style>
