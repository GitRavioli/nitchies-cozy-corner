import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

const app = createApp(App);

inject();
injectSpeedInsights();

app.use(router);

app.mount("#app");
