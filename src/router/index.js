import { createRouter, createWebHistory } from "vue-router";
import feature_routes from "./feature_routes.js";

const routes = [...feature_routes]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    const { title } = to.meta;
    const str = `${title || "INICIO"} | EARTHQUAKE APP`;
    document.title = str.toUpperCase();
});
export default router;