<template>
  <div class="row">
      <div class="card-panel col s12 blue-text lighten-2 right-align">
          <span v-if='authenticated'>
            <i class="material-icons small">lock_open</i>
          </span>
          <span v-else>
            <i class="material-icons small">lock_outline</i>
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'statusBar',
  props: {
      authenticated: Boolean,
      logout: Function
  },
  methods: {
    logoff() {
      alert('Logging out')
      this.logout()
    }
  }
}
</script>