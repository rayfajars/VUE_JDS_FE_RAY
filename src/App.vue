<template>
  <div id="app">
    <FormBantuan />
  </div>
</template>

<script>
import FormBantuan from './components/FormBantuan'

export default {
  name: 'App',
  components: {
    FormBantuan
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
