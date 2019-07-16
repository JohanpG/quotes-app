import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import i18n from '@/plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import SocialSharing from 'vue-social-sharing'
import Share from 'vue-social-share'



import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(FlagIcon)
Vue.use(SocialSharing);
Vue.use(Share)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
