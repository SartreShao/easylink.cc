<template>
  <img class="background" src="../assets/background.png" />
</template>

<script setup>
import Store from "@/store";
import { inject, watchEffect } from "vue";
</script>

<style scoped lang="scss">
.background {
  position: fixed;
  object-fit: cover;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
}
</style>