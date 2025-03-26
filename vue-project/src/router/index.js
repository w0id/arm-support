import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { menuItems } from '../config/menu'

// const menuItems = eel.getRoutes()();

const routes = [
    {
        path: '/',
        component: Home
    },
    ...menuItems.map(item => ({
        path: item.uri,
        component: item.component,
        meta: { title: item.title },
        beforeEnter: async (to, from, next) => {
            try {
                if (item.data != "" && typeof item.data != "undefined") {
                    const pyData = await window.eel[item.data]()();
                    to.meta.pyData = pyData;
                }
                next();
            }catch(err){
                console.error("Failed to fetch data from Python:", err);
                next(false);
            }
        }
    }))
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
