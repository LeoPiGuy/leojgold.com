<template>
  <div class="background">
    <div class="w-full flex justify-center">
      <img class="avatar" src="@/assets/myAvatar.svg"/>
    </div>
    <div class="loading-module flex justify-center pt-2">
      <div class="name">
        <p class="capital">L</p>
        <p class="lower">eo</p>
      </div>
      <div class="name">
        <p class="capital">J</p>
        <p class="lower">acob</p>
      </div>
      <div class="name">
        <p class="capital">G</p>
        <p class="lower">old</p>
      </div>
    </div>
    <div class="choices">
      <p class="caption">I present you with some options. Choose wisely.</p>
      <div class="flex justify-center">
        <router-link class="continue-button" to="/home"><span>Continue to My Website</span></router-link>
      </div>
      <p class="text-gray-400 caption">or you can visit me at any of the sites listed below:</p>
      <div class="flex justify-center">
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .background {
    @apply w-full h-full;
    @apply flex flex-col justify-center;
    background-color: #172d44;
  }

  /* Avatar things */
  .avatar {
    @apply relative block;
    @apply border-gray-200 border-8 rounded-full;
    @apply w-1/2;
    transition: opacity 1s, transform 2s;
    /* margin-top: 10vh; */
  }

  @screen sm {
    .avatar {
      @apply w-1/3;
    }
  }

  @screen md {
    .avatar {
      @apply w-1/4;
    }
  }

  @screen lg {
    .avatar {
      @apply w-1/5;
    }
  }

  @screen xl {
    .avatar {
      @apply w-1/6;
    }
  }

  /* Name things */

  .name {
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

  /* Choice things */

  .caption {
    @apply text-gray-200;
    font-family: 'Fjalla One', sans-serif;
  }

  @screen md {
    .caption{
      @apply text-sm;
    }
  }

  @screen xl {
    .caption {
      @apply text-2xl;
    }
  }
  .continue-button {
    @apply rounded-lg cursor-pointer py-1 px-2 m-4 text-2xl;
    background: beige;
    color: #172d44;
    transition: all 0.4s;
 }
 .continue-button span {
   @apply inline-block relative font-sans;
   transition: all 0.4s;
   transition-delay: padding 0.4s;
 }
 .continue-button span:after {
    @apply absolute opacity-0 top-0;
    content: '\00bb';
    right: -20px;
    transition: 0.5s;
 }
 .continue-button:hover {
   @apply border;
   background: #172d44;
   color: beige;
 }
 .continue-button:hover span {
   @apply pr-4;
 }
 .continue-button:hover span:after {
    @apply opacity-100 right-0;
 }
</style>

<script>
module.exports = {
  name: 'landing-page',
  data: function () {
    return {
      stage1: false,
      stage2: false,
      stage3: false,
      stage4: false,
      stageEnd: false
    }
  },
  methods: {
    initAnimation: function () {
      let vm = this
      setTimeout(function () { vm.stage1 = true }, 1000)
      setTimeout(function () { vm.stage2 = true }, 1500)
      setTimeout(function () { vm.stage3 = true }, 2000)
      setTimeout(function () { vm.stage4 = true }, 2000)
      setTimeout(function () { vm.stageEnd = true }, 4000)
    }
  },
  mounted () {
    this.initAnimation()
  }
}
</script>
