<template>
  <transition name="landing-page">
    <div class="landing-container">
      <div class="w-full flex justify-center">
        <img class="avatar" src="@/assets/myAvatar.svg"/>
      </div>
      <div class="loading-module flex justify-center pt-2">
        <div class="name">
          <p class="capital l">L</p>
          <p class="lower">eo</p>
        </div>
        <div class="name">
          <p class="capital j">J</p>
          <p class="lower">acob</p>
        </div>
        <div class="name">
          <p class="capital g">G</p>
          <p class="lower">old</p>
        </div>
      </div>
      <div class="choices">
        <p class="caption c1">You can either</p>
        <div class="flex justify-center">
          <router-link class="continue-button" to="/home"><span>Continue to My Website</span></router-link>
        </div>
        <p class="text-gray-400 caption c2">or you can visit / contact me at any of the sites listed below:</p>
        <div class="flex justify-center flex-wrap">
          <div class="social left s1">
            <a href="https://github.com/LeoPiGuy" target="_blank">
              LeoPiGuy
              <font-awesome-icon :icon="['fab','github']"></font-awesome-icon>
            </a>
          </div>
          <div class="social right s1">
            <a href="https://www.linkedin.com/in/leo-gold/" target="_blank">
              <font-awesome-icon :icon="['fab','linkedin']"></font-awesome-icon>
              Leo Gold</a>
          </div>
          <div class="social left s2">
            <a>
              LeoPi#6245
              <font-awesome-icon :icon="['fab','discord']"></font-awesome-icon>
            </a>
          </div>
          <div class="social right s2">
            <a href="mailto:leopiguy@gmail.com" target="_blank">
              <font-awesome-icon :icon="['fas','envelope']"></font-awesome-icon>
              leopiguy@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="postcss" scoped>

  /* Pre-animation */

  .landing-container {
    @apply w-full h-full;
    @apply flex flex-col justify-center;
  }

  /* Avatar things */
  .avatar {
    @apply relative block;
    @apply border-gray-200 border-8 rounded-full;
    @apply w-1/2;
    height: 50vw;
    /* margin-top: 10vh; */
  }

  @screen sm {
    .avatar {
      @apply w-1/3;
      height: 33.33333vw;
    }
  }

  @screen md {
    .avatar {
      @apply w-1/4;
      height: 25vw;
    }
  }

  @screen lg {
    .avatar {
      @apply w-1/5;
      height: 20vw;
    }
  }

  @screen xl {
    .avatar {
      @apply w-1/6;
      height: 16.66666vw;
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

  /* Social media things */
  .social {
    @apply mt-2 text-base w-5/12 mx-2;
    font-family: 'Caveat', cursive;
    color: beige;
    transition: color 0.5s, font-size 0.5s;
  }

  .social:hover {
    @apply text-blue-500;
  }

  .social.right {
    @apply text-left;
  }

  .social.left {
    @apply text-right;
  }

  @screen sm {
    .social {
      @apply text-lg;
    }
  }

  @screen md {
    .social {
      @apply text-xl;
    }
  }

  @screen lg {
    .social {
      @apply text-2xl
    }
  }

  @screen xl {
    .social {
      @apply mt-4 mx-8 text-4xl;
    }
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

  .capital.l {
    transform: translate(400%, -100%);
  }

  .capital.j {
    transform: translate(200%)
  }

  .capital.g {
    transform: translate(-150%, 100%)
  }

  .capital {
    animation: reset-position 0.75s ease 1s forwards;
  }

  .lower {
    opacity: 0;
    animation: appear 0.75s ease 1.5s forwards, reset-position 0.75s ease 1.5s forwards;
    transform: translate(10px);
  }

  .loading-module {
    transform: translate(0,-40%);
    animation: reset-position 1s ease 2s forwards;
  }

  .avatar {
    opacity: 0;
    transform: translate(0,-20%);
    animation: appear 0.75s ease 2s forwards, reset-position 2s ease 2s forwards;
  }

  .caption, .continue-button, .social {
    opacity: 0;
    transform: translate(0, -20%);
  }

  .c1 {
    animation: appear 0.75s ease 2.5s forwards, reset-position 1s ease 2.5s forwards;
  }

  .c2 {
    animation: appear 0.75s ease 3s forwards, reset-position 1s ease 3s forwards;
  }

  .continue-button {
    animation: appear 0.75s ease 2.75s forwards, reset-position 1s ease 2.75s forwards;
  }

  .s1 {
    animation: appear 0.75s ease 3.25s forwards, reset-position 1s ease 3.25s forwards;
  }

  .s2 {
    animation: appear 0.75s ease 3.5s forwards, reset-position 1s ease 3.5s forwards;
  }
</style>

<script>
module.exports = {
  name: 'landing-page'
}
</script>
