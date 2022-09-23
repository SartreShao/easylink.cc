<template>
  <div style="background: #000; color: #fff">{{ fuck }}</div>
  <about-view></about-view>
</template>

<script setup>
import Store from "@/store";
import { inject, watchEffect } from "vue";
import AboutView from "./AboutView.vue";

const fuck = inject(Store.isShowFinisheView);
watchEffect(() => {
  console.log("Home", fuck.value);
});
</script>
