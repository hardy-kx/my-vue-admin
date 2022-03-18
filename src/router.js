//引入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import page1  from './page1.vue';
import page2  from './page2.vue';

const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path:'/page1',component:page1},
    {path:"/page2",component:page2}
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
    routes
});

export default router
