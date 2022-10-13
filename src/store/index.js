import { ref, provide } from "vue";

const isShowFinishView = Symbol();

function useProvider() {
  provide(isShowFinishView, ref(false));
}

export default {
  useProvider,
  isShowFinishView,
};
