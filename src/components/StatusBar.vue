<template>
  <div class="row">
      <div class="card-panel col s12 blue-text lighten-2 center-align">
        <router-link to="/">
          <i class="material-icons small">home</i>
        </router-link>
        <span v-if="authenticated">
          <i class="material-icons">lock_open</i>
          <a @click="logout" href="">Logout</a>
        </span>
        <span v-else>
          <i class="material-icons small">lock_outline</i>
        </span>
      </div>
  </div>
</template>

<script>
import auth from '@/util/auth'

export default {
  name: 'statusBar',
  props: {
      authenticated: Boolean
  },
  methods: {
    logout() {
      auth.logout(() => {
        alert('Sad to see you leave')
        this.$router.replace('/')
      })
    }
  }
}
</script>