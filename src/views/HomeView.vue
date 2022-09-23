<template>
  <!-- 背景图片 -->
  <img class="background" src="../assets/background.png" />

  <!-- 主 Containter -->
  <div class="home-container">
    <!-- logo -->
    <img class="logo" src="../assets/logo.png" />
  </div>
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

.home-container {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  left: 11.98vw;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  .logo {
    object-fit: scale-down;
    transition: all 0.15s linear;
    width: 22.4vw;
    height: 23.33vh;
    &:hover {
      transition: all 0.15s linear;
      margin-left: 1vw;
    }
  }
}
</style>