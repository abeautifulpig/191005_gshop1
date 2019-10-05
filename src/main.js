/*
入口js
 */
import Vue from 'vue'
// main.js 为入口文件，并与app.vue组件向关联使此组件为跟组件
// 是所有的内容都在app.vue 上面呈现。
import app from './app'
// 在router里配置路由，将app组件相关联

import router from './router'

// 生成vue的根实例;创建每个组件都会生成一个vue的实列，并且会用到根实例上面的所有属性
new Vue({
  el:"#app",
  render:h=> h(app),
  router,
})
