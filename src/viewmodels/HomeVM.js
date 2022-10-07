import Api from "@/model";

const uploadFile = async (name, file, currentProgress) => {
  // 初始化：当前上传进度
  currentProgress.value = 0;

  // 调用 API 上传文件
  const uploadedFile = await Api.uploadFile(name, file, currentProgress);
  console.log("uploadFile: " + uploadedFile);
};

/**
 * 上传文件列表
 * @param {*} fileList
 * @param {*} isUploading
 * @param {*} currentProgress
 * @param {*} resultList
 */
const uploadFileList = async (
  fileList,
  isUploading,
  currentProgress,
  currentUploadIndex,
  resultList
) => {
  // 修改状态：当前正在上传文件
  isUploading.value = true;

  // 初始化：结果列表
  resultList.value = [];

  // 上传进程
  for (let i = 0; i < fileList.length; i++) {
    // 设定：当前上传的是第几个文件
    currentUploadIndex.value = i + 1;

    // 读取文件
    const file = fileList[i];

    // 上传文件
    const result = await uploadFile(file.name, file, currentProgress);

    // 将文件推送到文件列表中
    resultList.push(result);
  }
};

export default {
  uploadFileList,
};
