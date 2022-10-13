import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AV from "leancloud-storage";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

AV.init({
  appId: "Eg39w11lqO8cv6GPphyxCQRF-gzGzoHsz",
  appKey: "6es1crbDK0vqy7NQNelNmBuI",
  serverURL: "https://ishaolizhi.api.hearfresh.cn",
});

const app = createApp(App);

app.use(ElementPlus);

app.use(router);

app.mount("#app");
