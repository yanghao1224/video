import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import More from '@/components/More'
import Xiaxi from '@/components/Xiaxi'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },// 让默认的页面是/home
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/xiaxi/:id',
      name: 'Xiaxi',
      component: Xiaxi
    }
  ]
})
