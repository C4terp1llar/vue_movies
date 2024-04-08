import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import router from "@/router";
import M from 'materialize-css'

import './assets/res.css'
import 'materialize-css/dist/css/materialize.min.css'

const app = createApp(App);

app.use(createPinia())
    .use(router)

app.config.globalProperties.$M = M;

app.mount('#app')