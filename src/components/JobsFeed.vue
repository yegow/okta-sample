<template>
  <div>
    <div class="row">
      <div class="col s12">
        <button class="btn" @click="initRequest">Test token</button>
        <div v-if="response">
          <pre>{{response}}</pre>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s4">
        <div class="card-panel left-align"
          v-for="job in jobs" :key="job.id">
          <div class="card-content blue-text">
            <span class="card-title">{{job.title}}</span>
            <p>{{job.description}}</p>
          </div>
          <div class="card-action">
            <a href="#">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import auth from '@/util/auth'

let jobs = [
    {
        id: 1,
        title: 'Easy skanking',
        description: 'Supply a whole lot of the devils lattice'
    },
    {
        id: 2,
        title: 'Daily blues',
        description: 'Be part of a music band'
    },
    {
        id: 3,
        title: 'Life on controllers',
        description: 'Choose your console. Game for life'
    }
]
export default {
  name: 'statusBar',
  data() {
      return {
          jobs,
          response: null
      }
  },
  methods: {
    async initRequest() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${auth.getToken()}`
      alert('Sending token' + auth.getToken())
      try {
        const res = await axios.get('http://localhost:4000/users/auth')
        alert('Got data' + res.toString())
        this.response = res.data
      } catch(e) {
        this.response = e.message
      }
    }
  }
}
</script>