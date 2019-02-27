import Vue from "vue";
import App from "./page2.vue";
import router from "./router";
import "@/utils/index";

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
