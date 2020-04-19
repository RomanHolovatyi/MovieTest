<template>
  <div class="page page-home">
    <div class="wrapper">
      <div class="page-home__title">Find movie to watch</div>
      <input
        v-model="movieTitle"
        placeholder="Enter movie title"
        class="page-home__input"
      />
    </div>
  </div>
</template>

<script>
  import debounce from 'lodash.debounce'

  export default {
    name: 'Home',
    components: {},
    data () {
      return {
        movieTitle: ''
      }
    },
    watch: {
      movieTitle: debounce(function () {
        console.log('RUN')
      }, 300)
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
  }
</style>
