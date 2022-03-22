//引入vue
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/page1',
        children: [{
            path: 'page1',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
        }]
    },
    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('@/views/form/index'),
                meta: { title: 'Form', icon: 'form' }
            }
        ]
    },
]
const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher
}

export default router
