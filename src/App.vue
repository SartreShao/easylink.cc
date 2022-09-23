<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import Store from "@/store";

Store.useProvider();
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  position: relative;
}
</style>
