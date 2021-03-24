import "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";
import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import MyView from "@/MyView.vue";

Vue.use(Router);

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify(),
  router: new Router({
    routes: [
      { path: "/", redirect: { name: "MyView" } },
      {
        name: "MyView",
        path: "/my-view",
        component: MyView,
      },
    ],
    mode: "history",
  }),
  render: (h) => h(App),
}).$mount("#app");
