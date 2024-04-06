export default [
    {
        path: "/",
        component: () => import("../layout/main.vue"),
        redirect: { name: "feature_list" },
        children:[
            {
                path: "/feature-list",
                name: "feature_list",
                component: () => import("../views/features/list.vue"),
                meta: { title: "LISTADO" },
            },
        ]
    }
]