<template>
  <div id="app">
    <transition name="route" appear mode="out-in">
      <router-view  :key="$route.fullPath"/>
    </transition>
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
    background-color: #172d44;
    overflow: hidden;
  }

  /* Main routed page transition */

  .route-leave-active, .route-enter-active {
    transition: opacity 0.5s, transform 0.5s;
  }

  .route-enter {
    opacity: 0;
    transform: translateY(-100%);
  }

  .route-leave .route-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .route-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
</style>

<script>
import MainFooter from '@/components/MainFooter.vue'
export default {
  components: {
    MainFooter
  }
}
</script>
