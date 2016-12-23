// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Home'
import Overview from './Overview'
import PlayerDetails from './PlayerDetails'

Vue.use(VueRouter)

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/overview', component: Overview },
      { path: '/player/:index', component: PlayerDetails }
    ]
  })
}).$mount('#app')
