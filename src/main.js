import Vue from "vue";
import App from "./App.vue";

import Carousel from "vue-carousel-3d";

import "./assets/styles/index.css";

Vue.config.productionTip = false;

Vue.use(Carousel);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
