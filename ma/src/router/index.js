import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aa from '@/components/aa'
import bb from '@/components/bb'
import cc from '@/components/cc'
import dd from '@/components/dd'
import ee from '@/components/ee'
import ff from '@/components/ff'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aa',
      component: aa
    },
    {
      path: '/bb',
      component: bb
    }
    ,
    {
      path: '/cc',
      component: cc
    } ,
    {
      path: '/dd',
      component: dd
    }
    ,
    {
      path: '/ee',
      component: ee
    }
    ,
    {
      path: '/ff',
      component: ff
    }
  ]
})
