import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Auth from '@okta/okta-vue'
import router from './router/index'
import config from './app.config'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Auth, {
  issuer: config.oktaDomain + '/oauth2/default',
  client_id: config.clientId,
  redirect_uri: 'http://localhost:'+ config.port + 
      '/implicit/callback',
  scope: 'openid profile email'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
