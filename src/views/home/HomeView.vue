<template>
  <!-- 背景图片 -->
  <img class="background" src="../../assets/background.png" />

  <!-- 主 Containter -->
  <div class="home-container">
    <!-- logo -->
    <div class="logo-container">
      <img class="logo" src="../../assets/logo.png" />

      <div class="title">简单云链</div>
    </div>

    <!-- button -->
    <div class="button" @click="clickButton">
      <!-- icon 加号 -->
      <icon-add v-if="!isUploading" class="add-icon"></icon-add>

      <!-- button 文字 -->
      <div class="button-text">{{ uploadButtonText }}</div>

      <!-- input -->
      <input
        v-show="!isUploading"
        class="file-input"
        type="file"
        multiple="false"
        ref="inputFile"
        @change="inputFileChanged($event)"
      />
    </div>
  </div>

  <!-- 链接列表：上传成功后弹出 -->
  <link-list-dialog
    v-if="isShowLinkListDialog"
    :link-list="linkList"
  ></link-list-dialog>
</template>

<script setup>
import Store from "@/store";
import { inject, watchEffect, ref } from "vue";
import IconAdd from "@/components/icons/IconAdd.vue";
import LinkListDialog from "./components/LinkListDialog.vue";
import { HomeVM } from "@/viewmodels/index";

// ----------------------------------------------------------------
// -----------------------界面元素绑定------------------------------
// ----------------------------------------------------------------

// 按钮上的文字
const uploadButtonText = ref("添加文件，转成云链");

// input 元素
const inputFile = ref(null);

// ----------------------------------------------------------------
// -----------------------上传状态相关-------------------------------
// ----------------------------------------------------------------

// 当前是否为上传状态
const isUploading = ref(false);

// 当前上传进度
const currentProgress = ref(0);

// 当前上传队列中共有多少文件
const currentUploadAmount = ref(0);

// 当前上传第几个文件
const currentUploadIndex = ref(0);

// 上传结果
const linkList = ref([]);

// 是否显示完成上传弹窗
const isShowLinkListDialog = inject(Store.isShowLinkListDialog);

// 输入时间：上传的文件发生改变
const inputFileChanged = async (e) => {
  HomeVM.uploadFileList(
    e.target.files,
    isUploading,
    currentProgress,
    currentUploadIndex,
    currentUploadAmount,
    linkList,
    isShowLinkListDialog,
    inputFile
  );
};

// 更新 UploadButton 上的文字
watchEffect(() => {
  uploadButtonText.value = HomeVM.getUploadButtonText(
    isUploading,
    currentUploadAmount,
    currentUploadIndex,
    currentProgress
  );
});
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

  .logo-container {
    .logo {
      transition: all 0.15s linear;
      width: 39.81vh;
      height: 17.22vh;
    }

    .title {
      font-size: 4.26vh;
      color: white;
      font-family: "思源黑体 Bold";
    }

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
    justify-content: center;

    .add-icon {
      width: 2.31vh;
      height: 2.31vh;
      margin-right: 2.31vh;
    }

    // @keyframes alwaysrotate {
    //   100% {
    //     transform: rotate(360deg);
    //   }
    // }

    // .loading-icon {
    //   animation: alwaysrotate 1s infinite;
    //   animation-timing-function: ease;
    //   width: 2.31vh;
    //   height: 2.31vh;
    // }

    .button-text {
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
      margin-left: 1vw;
    }
  }
}
</style>
