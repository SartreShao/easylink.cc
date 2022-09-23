<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
import Store from "@/store";
import { inject, watchEffect } from "vue";

const fuck = inject(Store.isShowFinisheView);
watchEffect(() => {
  console.log("About", fuck.value);
});
setInterval(() => (fuck.value = !fuck.value), 1000);
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
