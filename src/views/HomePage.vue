<template>
  <div class="home-container">
    <div class="w-full flex justify-center">
        <img class="main-bulldozer" src="@/assets/bull-dozer.svg" alt="Bulldozer">
    </div>
    <div class="w-full flex justify-center">
      <div class="caption-container w-full flex flex-wrap justify-center">
        <div class="caption-text">
          <p class="capital">S</p>
          <p class="lower">till</p>
        </div>
        <div class="caption-text">
          <p class="capital"> U </p>
          <p class="lower">nder</p>
        </div>
        <div class="caption-text">
          <p class="capital"> D</p>
          <p class="lower">evelopment</p>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <p class="second-caption">For now you can:</p>
    </div>
    <div class="flex justify-center flex-wrap">
      <div class="option o1">
        <a href="/resume.pdf">
          <font-awesome-icon class="youtube" :icon="['fas','file']"></font-awesome-icon>
          View my resume
        </a>
      </div>
      <div class="option o2">
        <a href="http://tap.leopiguy.com" target="_blank">
          <font-awesome-icon class="youtube" :icon="['fab','youtube']"></font-awesome-icon>
          Watch my Tap Dance solo
        </a>
      </div>

    </div>
  </div>
</template>

<style lang="postcss" scoped>

  /* Pre Animation */
  .home-container {
    @apply w-full h-full;
    @apply flex flex-col justify-center;
  }

  /* Text */

  .caption-text {
    @apply subpixel-antialiased tracking-wide whitespace-no-wrap pl-2;
    font-family: 'Fjalla One', sans-serif;
  }
  .capital, .lower {
    display: inline-block;
  }
  .capital {
    @apply text-5xl;
    color: beige;
  }
  .lower {
    @apply text-4xl;
    @apply text-gray-400;
  }

  @screen md {
    .capital{
      @apply text-6xl;
    }
    .lower {
      @apply text-5xl;
    }
  }

  @screen xl {
    .capital{
      font-size: 5.25rem;
    }
    .lower {
      @apply text-6xl;
    }
  }

  .second-caption {
    @apply text-gray-200;
    font-family: 'Fjalla One', sans-serif;
  }

  @screen md {
    .second-caption{
      @apply text-sm;
    }
  }

  @screen xl {
    .second-caption {
      @apply text-2xl;
    }
  }

  /* Main Bulldozer Things */

  .main-bulldozer {
    @apply w-1/2;
    @apply relative block;
  }

  @screen sm {
    .main-bulldozer {
      @apply w-1/3;
      height: 33.33333vw;
    }
  }

  @screen md {
    .main-bulldozer {
      @apply w-1/4;
      height: 25vw;
    }
  }

  @screen lg {
    .main-bulldozer {
      @apply w-1/5;
      height: 20vw;
    }
  }

  @screen xl {
    .main-bulldozer {
      @apply w-1/6;
      height: 16.66666vw;
    }
  }

  /* Option Things */

  .option {
    @apply mt-2 text-base w-full mx-2;
    font-family: 'Caveat', cursive;
    color: beige;
    transition: color 0.5s, font-size 0.5s;
  }
  .option:hover {
    color:#c4302b;
  }
  @screen sm {
    .option {
      @apply text-lg;
    }
  }

  @screen md {
    .option {
      @apply text-xl;
    }
  }

  @screen lg {
    .option {
      @apply text-2xl
    }
  }

  @screen xl {
    .option {
      @apply mt-4 mx-8 text-4xl;
    }
  }

  .youtube {
    color: #c4302b;
    transition: color 0.5s, font-size 0.5s;
  }
  .option:hover .youtube {
    color: beige;
  }
  /* Animation Styling */

  @keyframes appear {
    to {
      opacity: 1;
    }
  }

  @keyframes reset-position {
    to {
      transform: translate(0)
    }
  }

  .main-bulldozer {
    transform: translateX(100vw);
    animation: reset-position ease 2s forwards;
  }

  .caption-container {
    opacity: 0;
    animation: appear 2s ease 1s forwards;
  }

  .second-caption {
    opacity: 0;
    animation: appear 2s ease 2s forwards;
  }

  .option.o1{
    opacity: 0;
    animation: appear 2s ease 2.75s forwards;
  }
  .option.o2{
    opacity: 0;
    animation: appear 2s ease 3.5s forwards;
  }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
