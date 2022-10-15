import { ref, provide } from "vue";

const isShowLinkListDialog = Symbol();

function useProvider() {
  provide(isShowLinkListDialog, ref(false));
}

export default {
  useProvider,
  isShowLinkListDialog,
};
