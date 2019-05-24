<template>
  <div class="row">
      <div class="card-panel col s4 left-align"
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
</template>

<script>
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
          jobs
      }
  }
}
</script>