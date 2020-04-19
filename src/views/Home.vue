<template>
  <div class="page page-home">
    <div class="wrapper">
      <div class="page-home__title">Find movie to watch, {{ user.name }}</div>
      <input
        v-model="searchQuery"
        placeholder="Enter movie title"
        class="page-home__input"
      />
      <multiselect
        v-model="movieType"
        :options="movieTypeList"
        hide-selected
        class="page-home__select"
      />
      <movie-list :movie-list="movieList" />
    </div>
  </div>
</template>

<script>
  import debounce from 'lodash.debounce'
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'
  import movieList from '@/components/MovieList'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Home',
    components: {
      Multiselect,
      movieList
    },
    data () {
      return {
        movieType: 'All',
        movieTypeList: ['All', 'Movies', 'TV series'],
        page: 1,
        searchQuery: ''
      }
    },
    computed: {
      ...mapState({
        movieList: state => state.movies.movieList,
        movieTotal: state => state.movies.movieTotalCount,
        user: state => state.user
      })
    },
    watch: {
      searchQuery: debounce(function () {
        if (this.searchQuery.length < 3) return
        this.fetchMovieList({ searchQuery: this.searchQuery, page: this.page })
      }, 300)
    },
    methods: {
      ...mapActions({
        fetchMovieList: 'movies/fetchMovieList'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .page-home {
    &__title {
      font-size: 28px;
      font-weight: 800;
    }

    &__input {
      color: #333;
      font-size: 1.2rem;
      margin: 0 auto;
      padding: 1.5rem 2rem;
      border-radius: 0.2rem;
      background-color: rgb(255, 255, 255);
      border: 1px solid black;
      width: 90%;
      display: block;
      transition: all 0.3s;
    }

    &__select {
      width: 90%;
      margin: 0 auto;
    }
  }
</style>
