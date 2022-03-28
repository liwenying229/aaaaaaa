import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter) //在vue上安装依赖vue的插件
    // 1.定义组件
import Home from "../components/Home"
import News from "../components/News"
let routes = [{
    path: "/home",
    component: Home
}, {
    path: "/news",
    component: News
}]

let router = new VueRouter({
    routes
})
export default router