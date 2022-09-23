import { ref, provide } from "vue";

const isShowFinisheView = Symbol();

function useProvider() {
  provide(isShowFinisheView, ref(false));
}

export default {
  useProvider,
  isShowFinisheView,
};
