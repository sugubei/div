import Vue from 'vue'
import App from './App.vue'
import router from './router'
import modules from './components/index'
Vue.use(modules)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
