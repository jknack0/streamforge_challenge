<template>
  <div id="app">
    <SearchStreamer />
  </div>
</template>

<script>
import SearchStreamer from './components/SearchStreamer.vue'

export default {
  name: 'App',
  components: {
    SearchStreamer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
