<template>
  <div class="movie-list">
    <router-link
      v-for="movie in movieList"
      :key="`movie-${movie.imdbID}`"
      class="movie-list__item"
      :to="{ name: 'Movie', params: { id: movie.imdbID } }"
    >
      {{ movie.Title }}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'MovieList',
    props: {
      movieList: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .movie-list {
    display: flex;
    flex-direction: column;

    &__item {
      text-decoration: none;
      font-size: 18px;
    }
  }
</style>
