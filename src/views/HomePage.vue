<template>
  <div class="home-container">
    <!-- <div class="center-container">
      <img class="bigleo" src="@/assets/dancingleo.jpg" />
    </div> -->
    <h1>Hi. I'm Leo</h1>
    <h2>Some of my friends call me LeoPiGuy (click <a>here</a> to learn more!)</h2>

  </div>
</template>

<style lang="postcss" scoped>
  @keyframes appear {
    to {
      opacity: 1;
    }
  }

  .home-container {
    @apply w-full h-full;
    @apply flex flex-col justify-center;
  }

  .center-container {
    @apply w-full;
    @apply flex justify-center;
    height: 50%;
  }

  /* img.bigleo {
    @apply relative block;
    @apply w-auto h-full;
    @apply border-gray-200 border-4;
    border-radius: 10vh;
    opacity: 0;
    animation: appear 0.75s ease 0.25s forwards;
  } */
</style>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
