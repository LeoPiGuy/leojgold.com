<template>
  <div id="app">
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
}
</style>

<script>
import MainFooter from '@/components/MainFooter'
export default {
  components: {
    MainFooter
  }
}
</script>
