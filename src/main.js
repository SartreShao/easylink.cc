import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AV from "leancloud-storage";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

AV.init({
  appId: "jxAoTGx9FuLNOT1dmc46b78h-MdYXbMMI",
  appKey: "6sUyBR0CimL4DDSdEdgyAZZh",
  serverURL: "https://api.easylink.cc",
});

const app = createApp(App);

app.use(ElementPlus);

app.use(router);

app.mount("#app");
