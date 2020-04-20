<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <notifications
      group="app"
      width="400px"
      position="top center"
    />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    max-width: 900px;
  }

  .button {
    max-width: 200px;
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>
