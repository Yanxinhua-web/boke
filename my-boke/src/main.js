// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './router/index'
import Vueresource from 'vue-resource'
import axios from "axios";
Vue.use(Vueresource)
Vue.use(VueRouter)

//全局配置axiosurl
axios.defaults.baseURL='https://vuedemo-d664b.firebaseio.com'
// axios.defaults.headers.common['Autorization']="Token"
// axios.defaults.headers.posts['Content-tye']



//自定义指令
// Vue.directive('rainbow', {
//   bind(el, bindind, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// })
Vue.directive('theme', {
  bind(el, bindind, vnode) {
    if (bindind, vnode == 'wide') {
      el.style.maxWidth = "1260px"
    } else if (bindind.value == 'narrow') {
      el.style.maxWidth = "560px"
    }
    if (bindind.arg == 'column') {
      el.style.background = "#6677cc";
      el.style.padding = "20px"
    }
  }
})
//自定义过滤器
// Vue.filter("to-upperCase", (value) => {
//   return value.toUpperCase();
// })
Vue.filter("snippet", (value) => {
  return value.slice(0, 100) + "...";
})
Vue.config.productionTip = false

//创建路由
const router=new VueRouter({
  routes:Routes,
  mode:'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: {
    App
  },
  template: '<App/>'
})
