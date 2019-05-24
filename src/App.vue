<template>
  <div id="app">
    <StatusBar :authenticated="authenticated" />
    <router-view></router-view>
  </div>
</template>

<script>
import StatusBar from './components/StatusBar.vue'

export default {
  name: 'app',
  data() {
    return {
      authenticated: false
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
      this.authenticated = await this.$auth.isAuthenticated ()
    },
    login() {
      this.$auth.loginRedirect('/login')
    },
    async logout() {
      await this.$auth.logout()
      await this.isAuthenticated()

      this.$router.push({ path: '/' })
    }
  },
  components: {
    StatusBar
  }
}
</script>

<style>
</style>
