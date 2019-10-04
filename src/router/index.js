import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Merch from '../components/Merch.vue'
import Closing from '../components/Closing.vue'
import Score from '../components/Score.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/merch',
      name: 'Merch',
      component: Merch
    },
    {
      path: '/closing',
      name: 'Closing',
      component: Closing
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
