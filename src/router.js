import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DailyQuote from './views/DailyQuote.vue'
import NewQuote from './views/NewQuote.vue'
import Quotes from './views/Quotes.vue'
import Pet from './views/Pet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dailyQuote',
      component: DailyQuote
    },
    {
      path: '/newQuote',
      name: 'newQuote',
      component: NewQuote
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: Quotes
    },
    {
      path: '/pets/:species/:id',
      name: 'pet',
      component: Pet
    }
  ]
})
