import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/timeline/timeline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:  '/timeline'
    },
    {
      path: '/timeline',
      component: Timeline
    }
  ]
})
