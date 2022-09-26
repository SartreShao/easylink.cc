<template>
  <img class="background" src="../assets/background.png" />

  <!-- 主 Containter -->
  <div class="home-container">
    <!-- logo -->
    <img class="logo" src="../assets/logo.png" />

    <!-- button -->
    <div class="button">
      <!-- icon 加号 -->
      <icon-add v-if="!isOpps && !isUploading" class="add-icon"></icon-add>

      <!-- Icon Opps -->
      <icon-opps v-if="isOpps && !isUploading" class="add-icon"></icon-opps>

      <!-- Icon Loading -->
      <icon-loading v-if="isLoading" class="loading-icon"></icon-loading>

      <!-- button 文字 -->
      <div class="button-text">{{ buttonText }}</div>

      <!-- input -->
      <input
        class="file-input"
        type="file"
        multiple="false"
        ref="inputFile"
        @change="inputFileChanged($event)"
      />
    </div>
  </div>
</template>

<script setup>
import Store from "@/store";
import { inject, watchEffect, ref } from "vue";
import IconAdd from "@/components/icons/IconAdd.vue";
import IconOpps from "@/components/icons/IconOpps.vue";
import IconLoading from "@/components/icons/IconLoading.vue";

const buttonText = ref("添加文件，转成云链");

const isOpps = ref(false);

const inputFile = ref(null);

const isUploading = ref(false);

// eslint-disable-next-line no-unused-vars
const isShowFinishView = inject(Store.isShowFinishView);

const currentProgress = ref(0);

const currentFileUrl = ref("");

watchEffect(() => {
  if (isUploading.value) {
    buttonText.value =
      "正在上传..." + Number(currentProgress.value).toFixed(2) + "%";
  } else {
    buttonText.value = "添加文件，转成云链";
  }
});

const inputFileChanged = async (e) => {
  // 正在上传
  isUploading.value = true;
  currentProgress.value = 0;

  const file = new AV.File(e.target.files[0].name, e.target.files[0]);

  await file.save({
    onprogress: (progress) => {
      currentProgress.value = progress.percent;
    },
  });
  currentFileUrl.value = file.attributes.url;
  isUploading.value = false;
  inputFile.value.value = null;
  isShowFinishView.value = true;
};

// 点击事件：点击上传文件按钮
const clickButton = () => {
  if (isUploading.value === false) {
    buttonText.value = "Opps...That's Hurt";
    isOpps.value = true;
  }
};
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
    width: 39.81vh;
    height: 23.33vh;
    &:hover {
      transition: all 0.15s linear;
      margin-left: 1vw;
    }
  }

  .button {
    position: relative;
    transition: all 0.15s linear;
    cursor: pointer;
    width: 35vh;
    height: 7.5vh;
    margin-top: 6.94vh;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0.28vh 0.56vh rgba(0, 0, 0, 0.16);
    opacity: 1;
    border-radius: 3.75vh;
    display: flex;
    align-items: center;

    .add-icon {
      width: 2.31vh;
      height: 2.31vh;
      margin-left: 2.03vw;
    }

    @keyframes alwaysrotate {
      100% {
        transform: rotate(360deg);
      }
    }

    .loading-icon {
      animation: alwaysrotate 1s infinite;
      animation-timing-function: ease;
      width: 2.31vh;
      height: 2.31vh;
      margin-left: 2.03vw;
    }

    .button-text {
      margin-left: 2.31vh;
      font-size: 2.41vh;
      color: #212121;
      font-family: "思源黑体 Medium";
    }

    .file-input {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
    }

    &:hover {
      transition: all 0.15s linear;
      margin-left: -1vw;
    }
  }
}
</style>