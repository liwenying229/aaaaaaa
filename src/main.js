import Vue from 'vue'
import App from './App.vue'
import router from "./router/router.js"
Vue.config.productionTip = false


let vm = new Vue({
    render: h => h(App),
    router //4.挂载
}).$mount('#app')
console.log(vm);