<template>
    <p class="copy">&copy; Leo Gold {{date}}</p>
</template>
<style lang="postcss" scoped>
  .copy{
    @apply text-xs;
    background-color: #152331;
    color: gray;
  }
</style>
<script>
module.exports = {
  name: 'MainFooter',
  data: function () {
    return {
      date: 2022
    }
  }
}
</script>
