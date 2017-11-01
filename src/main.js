// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'

import Video from '@/components/Video'
import Intro from '@/components/Intro'
import Perks from '@/components/Perks'

Vue.config.productionTip = false

Vue.component('Video', Video)
Vue.component('Intro', Intro)
Vue.component('Perks', Perks)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
