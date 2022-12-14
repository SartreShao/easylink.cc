import AV from "leancloud-storage";
import { Log } from "@/utils";

export default {
  uploadFile: async (name, file, currentProgress) => {
    try {
      const result = await new AV.File(name, file).save({
        onprogress: (progress) => {
          currentProgress.value = progress.percent;
        },
      });
      Log.success("uploadFile", result);
      return result;
    } catch (error) {
      Log.failure("uploadFile", error);
      throw error;
    }
  },
};
