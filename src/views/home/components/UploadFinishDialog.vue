<template>
  <!-- 背景黑色蒙版 -->
  <div class="background">
    <!-- 弹窗容器 -->
    <div class="dialog-container"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.background {
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.dialog-container {
  width: 28.28vw;
  height: 70.83vh;
  background: #262626;
  border-radius: 1.57vh;
  box-shadow: 0 0.28vh 0.56vh rgba(0, 0, 0, 0.16);
}
</style>
