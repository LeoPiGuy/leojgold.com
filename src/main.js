import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'
import MainFooter from './components/MainFooter.vue'

Vue.config.productionTip = false

new Vue({
  router,
  components: {
    MainFooter
  },
  render: h => h(App)
}).$mount('#app')
