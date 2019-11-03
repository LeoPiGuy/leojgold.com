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

var data = null

var xhr = new XMLHttpRequest()
xhr.withCredentials = true

xhr.addEventListener('readystatechange', function () {
  console.log(this.responseText)
})

xhr.open('GET', 'https://xml.geoiplookup.io/')
xhr.setRequestHeader('User-Agent', 'PostmanRuntime/7.16.3')
xhr.setRequestHeader('Accept', '*/*')
xhr.setRequestHeader('Cache-Control', 'no-cache')
xhr.setRequestHeader('Postman-Token', '65b1940f-05f1-4860-908c-7f6ee1fdb080,ffe59092-108b-433d-a4ab-c4e69bdac995')
xhr.setRequestHeader('Host', 'xml.geoiplookup.io')
xhr.setRequestHeader('Accept-Encoding', 'gzip, deflate')
xhr.setRequestHeader('Cookie', '__cfduid=d28dbae2b439758e0f239a4165139e6061572806422')
xhr.setRequestHeader('Connection', 'keep-alive')
xhr.setRequestHeader('cache-control', 'no-cache')

xhr.send(data)

new Vue({
  router,
  components: {},
  render: h => h(App)
}).$mount('#app')
