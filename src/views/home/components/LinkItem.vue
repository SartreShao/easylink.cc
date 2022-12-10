<template>
  <!-- 链接 Item 容器 -->
  <div class="link-item-container">
    <div class="link-item">
      <div class="text-link">链接</div>

      <div class="url" @click="clickUrl(url)">{{ url }}</div>

      <div class="button-copy" @click="clickCopyUrl(url)">{{ buttonText }}</div>
    </div>

    <!-- 链接名称 -->
    <div class="link-name">{{ name }}</div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { ref } from "vue";
import HomeVM from "@/viewmodels/HomeVM";

defineProps({
  url: String,
  name: String,
});

const buttonText = ref("复制");

// 点击事件：点击 URL
const clickUrl = (url) => {
  window.open(url);
};

// 点击事件：点击复制 url
const clickCopyUrl = (url) => {
  HomeVM.copyUrl(ElMessage, url, buttonText);
};
</script>

<style lang="scss" scoped>
@media only screen and (orientation: landscape) {
  .link-item-container {
    width: 23.7vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3.52vh;

    .link-item {
      width: 23.7vw;
      height: 6.57vh;
      background: #ffffff;
      border-radius: 0.46vh;
      display: flex;
      align-items: center;
      position: relative;

      .text-link {
        margin-left: 1.2vw;
        margin-right: 1.2vw;
        font-size: 1.85vh;
        font-family: "思源黑体 Regular";
        color: #252525;
      }

      .url {
        width: 13.33vw;
        color: #2564dd;
        font-size: 1.85vh;
        font-family: "思源黑体 Regular";
        cursor: pointer;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .button-copy {
        position: absolute;
        right: 0.52vw;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        background: #19725e;
        width: 4.27vw;
        height: 4.81vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.28vh;
        box-shadow: 0 0.28vh 0.56vh rgba(0, 0, 0, 0.16);
        font-family: "思源黑体 Medium";
        font-size: 1.76vh;
        color: #ffffff;
        cursor: pointer;
      }
    }

    .link-name {
      margin-top: 0.28vh;
      margin-left: 0.36vw;
      font-family: "思源黑体 Medium";
      font-size: 1.85vh;
      color: #ffffff;
    }
  }
}

@media only screen and (orientation: portrait) {
  .link-item-container {
    width: 77.6vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2.96vh;

    .link-item {
      width: 77.6vw;
      height: 5.56vh;
      background: #ffffff;
      border-radius: 0.46vh;
      display: flex;
      align-items: center;
      position: relative;

      .text-link {
        margin-left: 4vw;
        margin-right: 4vw;
        font-size: 1.57vh;
        font-family: "思源黑体 Regular";
        color: #252525;
      }

      .url {
        width: 43.4vw;
        color: #2564dd;
        font-size: 1.57vh;
        font-family: "思源黑体 Regular";
        cursor: pointer;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .button-copy {
        position: absolute;
        right: 1.8vw;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        background: #19725e;
        width: 14vw;
        height: 4.17vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.28vh;
        box-shadow: 0 0.28vh 0.56vh rgba(0, 0, 0, 0.16);
        font-family: "思源黑体 Medium";
        font-size: 1.39vh;
        color: #ffffff;
        cursor: pointer;
      }
    }

    .link-name {
      margin-top: 0.28vh;
      margin-left: 1.2vw;
      font-family: "思源黑体 Medium";
      font-size: 1.57vh;
      color: #ffffff;
    }
  }
}
</style>
