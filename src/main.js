import './style.css'
import "./base.scss";
import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from "./router";
import primeVue from "./utils/primeVue.js";
import Wind from "./presets/wind/index.js";
import VueSweetalert2 from "vue-sweetalert2";

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Wind,
});
app.use(router);
app.use(primeVue);
app.use(VueSweetalert2)
app.mount('#app')
