<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
</style>
