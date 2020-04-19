<template>
  <div class="page page-movie">
    <div class="wrapper">
      <h1>{{ movie.Title }}</h1>
      <img
        :src="movie.Poster"
        :alt="movie.Title"
      >
      <router-link :to="{ name: 'Home' }">To Home Page</router-link>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Movie',
    data () {
      return {
        movie: {}
      }
    },
    methods: {
      ...mapActions({
        fetchMovieById: 'movies/fetchMovieById'
      }),
    },
    async created () {
      this.movie = await this.fetchMovieById(this.$route.params.id)
    }
  }
</script>

<style lang="scss" scoped>

</style>
