<template>
  <!-- 背景黑色蒙版 -->
  <div class="background-mask">
    <!-- 弹窗容器 -->
    <div class="dialog-container">
      <!-- 笑脸图标 -->
      <icon-laugh-face class="icon-laugh-face"></icon-laugh-face>

      <!-- 主标题 -->
      <div class="main-title">{{ mainTitle }}</div>

      <!-- 链接列表容器 -->
      <div class="link-list-container">
        <link-item
          v-for="(item, index) in linkList"
          :key="index"
          :name="item.name"
          :url="item.url"
        ></link-item>
      </div>

      <!-- 一键复制 -->
      <div class="copy-button">一键复制</div>

      <!-- 关闭图标 -->
      <icon-close-dialog
        class="icon-close-dialog"
        @click="closeDialog"
      ></icon-close-dialog>
    </div>
  </div>
</template>

<script setup>
import IconLaughFace from "@/components/icons/IconLaughFace.vue";
import IconCloseDialog from "@/components/icons/IconCloseDialog.vue";
import LinkItem from "./LinkItem.vue";
import { ref, inject } from "vue";
import Store from "@/store";

defineProps({
  linkList: [],
});

// 主标题文案
const mainTitle = ref("永久云链已生成");

// 是否显示弹窗
const isShowFinishView = inject(Store.isShowFinishView);

// 点击关闭啊按钮
const closeDialog = () => {
  isShowFinishView.value = false;
};
</script>

<style lang="scss" scoped>
.background-mask {
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
  position: relative;
  width: 28.28vw;
  height: 70.83vh;
  background: #262626;
  border-radius: 1.57vh;
  box-shadow: 0 0.28vh 0.56vh rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-laugh-face {
    width: 3.7vh;
    height: 2.56vh;
    margin-top: 5.56vh;
  }

  .main-title {
    font-size: 3.24vh;
    margin-top: 4.19vh;
    color: white;
    font-family: "思源黑体 Bold";
  }

  .link-list-container {
    width: 100%;
    height: 35.65vh;
    margin-top: 3.7vh;
    margin-bottom: 3.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }

  .copy-button {
    width: 23.7vw;
    height: 6.2vh;
    border-radius: 3.1vh;
    box-shadow: 0 0.28vh 0.56vh rgba(0, 0, 0, 0.16);
    cursor: pointer;
    background: #19725e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.04vh;
    color: #ffffff;
    font-family: "思源黑体 Medium";
  }

  .icon-close-dialog {
    position: absolute;
    width: 3.7vh;
    height: 3.7vh;
    right: -1.85vh;
    top: -1.85vh;
    cursor: pointer;
  }
}
</style>
