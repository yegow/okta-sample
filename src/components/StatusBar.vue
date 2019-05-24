<template>
  <div class="row">
      <div class="card-panel col s12 blue-text lighten-2 right-align">
          <router-link to="/logout" v-if='authenticated'>
            <i class="material-icons small">lock_open</i>
          </router-link>
          <span v-else>
            <i class="material-icons small">lock_outline</i>
          </span>
          <a @click="logout" href="">Sign out</a>
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
      auth.logout()
    }
  }
}
</script>