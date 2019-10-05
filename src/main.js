import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin, faEnvelope, faDiscord)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  components: {},
  render: h => h(App)
}).$mount('#app')
