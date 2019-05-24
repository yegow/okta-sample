<template>
  <div id="app">
    <StatusBar :authenticated="loggedIn" logout="logout" />
    <router-view></router-view>
  </div>
</template>

<script>
import StatusBar from './components/StatusBar.vue'
import auth from './util/auth'
import { log } from 'util';

export default {
  name: 'app',
  data() {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created() {
    auth.onChange = loggedIn => {
      this.loggedIn = log
    }
  }
  // data() {
  //   return {
  //     authenticated: auth.loggedIn()
  //   }
  // },
  // created() {
  //   auth.onChange = authenticated => {
  //     this.authenticated = authenticated
  //   }
  // },
  // watch: {
  //   '$route': 'isAuthenticated'
  // },
  // methods: {
  //   async isAuthenticated() {
  //     this.authenticated = await this.$auth.isAuthenticated ()
  //   },
  //   login() {
  //     this.$auth.loginRedirect('/login')
  //   },
  //   async logout() {
  //     await this.$auth.logout()
  //     await this.isAuthenticated()

  //     this.$router.push({ path: '/' })
  //   }
  // },
  // components: {
  //   StatusBar
  // }
}
</script>

<style>
</style>
