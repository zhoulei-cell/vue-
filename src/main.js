import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./network/axios"
//import VueAxios from "vue-axios"
//import axios from "axios"

//Vue.use(VueAxios,axios)
Vue.prototype.axios = axios;

Vue.config.productionTip = false

//样式初始化
import "@/assets/reset.css"
//移动端布局方案
import "@/assets/hotcss/hotcss.js"

//全局过滤器，过滤图片
Vue.filter("handleImgSrc",function(value){
  return value.replace(/w.h/,"128.180");
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
