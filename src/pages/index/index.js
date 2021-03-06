import Vue from "vue";
import App from "./index.vue";
import router from "./router";
import "@/utils/index";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
