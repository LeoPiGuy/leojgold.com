<template>
  <div :class="{'loading-background': true, stage1: stage1, stage2: stage2, stage3: stage3, stage4: stage4}">
    <img class="avatar" src="../assets/myAvatar.svg"/>
    <div class="loading-module">
      <div class="name">
        <h1 class="l-letter letter">L</h1><span class="appear">eo</span>
      </div>
      <div class="name">
        <h1 class="j-letter letter">J</h1><span class="appear">acob</span>
      </div>
      <div class="name">
        <h1 class="g-letter letter">G</h1><span class="appear">old</span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .loading-background {
    background: black;
    width: 100%;
    height: 100%;
  }

  .name {
    padding-left: 2rem;
  }

  .name h1 {
    display: inline-block;
    margin: 0px;
    color: beige;
    font-family: 'Fjalla One', sans-serif;
    font-size: 800%;
  }
  .name span {
    display: inline-block;
    color: grey;
    font-size: 600%;
  }
  .appear {
    transition: opacity 2s, transform 2s;
    opacity: 0;
    transform: translate(10px,0);
    display: inline-block;
  }
  .stage2 .appear {
    transform: translate(0,0);
    opacity: 1;
  }

  .loading-module {
    transition: transform 1s;
    position: fixed;
    display: flex;
    text-align: left;
    top: 50%;
    left: 50%;
    width: auto;
    transform: translate(-50%, -50%)
  }

  .l-letter {
    transform: translate(400%)
  }
  .j-letter {
    transform: translate(200%)
  }
  .g-letter {
    transform: translate(-150%)
  }

  .letter {
    transition: transform 1s;
  }

  .stage1 .letter {
    transform: translate(0)
  }
  .stage3 .loading-module {
    transform: translate(-50%, 40%)
  }

  .avatar {
    transition: opacity 1s, transform 2s;
    position: fixed;
    width: 20%;
    display: fixed;
    border: 10px solid grey;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -120%);
    opacity: 0;
  }
  .stage4 .avatar {
    transform: translate(-50%, -100%);
    opacity: 1;
  }
</style>

<script>
module.exports = {
  name: 'landing-page',
  components: {},
  data: function () {
    return {
      stage1: false,
      stage2: false,
      stage3: false,
      stage4: false
    }
  },
  methods: {
    initAnimation: function () {
      let vm = this
      setTimeout(function () { vm.stage1 = true }, 1000)
      setTimeout(function () { vm.stage2 = true }, 2000)
      setTimeout(function () { vm.stage3 = true }, 3000)
      setTimeout(function () { vm.stage4 = true }, 4000)
    }
  },
  mounted () {
    this.initAnimation()
  }
}
</script>