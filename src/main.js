import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    video:[]
  },
  mutations: {
    addVideo(state,info){
      state.video = info
    }
  },
  getters: {

  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
