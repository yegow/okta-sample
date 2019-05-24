<template>
  <div id="app">
    <StatusBar :authenticated="authenticated" />
    <router-view></router-view>
  </div>
</template>

<script>
import StatusBar from './components/StatusBar.vue'
import auth from '@/util/auth'

export default {
  name: 'app',
  data() {
    return {
      authenticated: auth.loggedIn()
    }
  },
  created() {
    this.isAuthenticated()
  },
  watch: {
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    login() {
      this.$auth.loginRedirect('/login')
    },
    async logout() {
      alert('Signing out')
      await this.$auth.logout()
      await this.isAuthenticated()

      this.$router.push({ path: 'login' })
    }
  },
  components: {
    StatusBar
  }
}
</script>

<style>
</style>
