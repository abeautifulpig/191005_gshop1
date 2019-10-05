// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from "../pages/MSite/MSite.vue";
import Order from "../pages/Order/Order.vue";
import ProFile from "../pages/ProFile/ProFile.vue";
import Search from "../pages/Search/Search.vue";
import Login from "../pages/Login/Login.vue"

//声明使用的插件
Vue.use(VueRouter)

export default new VueRouter({
//所有路由
  routes:[
    {
      path:'/',
      redirect:'/msite',
    },
    {
      path:'/msite',
      component:MSite,
      meta:{
        FooterShow:true,
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        FooterShow:true,
      }
    },
    {
      path:'/profile',
      component:ProFile,
      meta:{
        FooterShow:true,
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        FooterShow:true,
      }
    },
    {
      path:'/login',
      component:Login,
    },
  ]
})
