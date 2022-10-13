import Api from "@/model/api";

/**
 * 上传文件
 * @param {s} name
 * @param {*} file
 * @param {*} currentProgress
 * @returns
 */
const uploadFile = async (name, file, currentProgress) => {
  // 初始化：当前上传进度
  currentProgress.value = 0;

  // 调用 API 上传文件
  const uploadedFile = await Api.uploadFile(name, file, currentProgress);

  return uploadedFile;
};

/**
 * 上传文件列表
 * @param {Ref<[]>} fileList
 * @param {Ref<Boolean>} isUploading
 * @param {Ref<Number>} currentProgress
 * @param {Ref<[]>} linkList
 */
const uploadFileList = async (
  fileList,
  isUploading,
  currentProgress,
  currentUploadIndex,
  currentUploadAmount,
  linkList,
  isShowFinishView,
  inputFile
) => {
  // 修改状态：当前正在上传文件
  isUploading.value = true;

  // 获取文件总数量
  currentUploadAmount.value = fileList.length;

  // 初始化：结果列表
  linkList.value = [];

  // 上传进程
  for (let i = 0; i < fileList.length; i++) {
    // 设定：当前上传的是第几个文件
    currentUploadIndex.value = i + 1;

    // 读取文件
    const file = fileList[i];

    // TODO 请补充上传失败逻辑
    // 上传文件
    const result = await uploadFile(file.name, file, currentProgress);

    // 将文件推送到文件列表中
    linkList.value.push({
      url: result.attributes.url,
      name: result.attributes.name,
    });
  }

  // 上传结束
  isUploading.value = false;

  // 弹出弹窗
  isShowFinishView.value = true;

  // 清空 input 组件内容（防止无法上传相同内容）
  inputFile.value.value = null;
};

const getUploadButtonText = (
  isUploading,
  currentUploadAmount,
  currentUploadIndex,
  currentProgress
) =>
  isUploading.value
    ? `（${currentUploadIndex.value}/${
        currentUploadAmount.value
      }）正在上传...${currentProgress.value.toFixed(2)}%`
    : "添加文件，转成云链";

export default {
  uploadFileList,
  getUploadButtonText,
};
