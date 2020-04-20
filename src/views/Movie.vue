<template>
  <div
    v-if="movie"
    class="page page-movie"
  >
    <h1>{{ movie.Title }}</h1>
    <img
      :src="movie.Poster"
      :alt="movie.Title"
      class="page-movie__poster"
    >
    <router-link
      :to="{ name: 'Home' }"
      class="button"
    >
      To Home Page
    </router-link>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Movie',
    data () {
      return {
        movie: null
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
  .page-movie {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__poster {
      margin: 0 auto 30px;
    }
  }
</style>
