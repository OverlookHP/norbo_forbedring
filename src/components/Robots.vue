<script setup>
import checkbox from './checkbox.vue';
import rcard from './rcard.vue';
</script>

<template>
  <div class="main">
    
    <checkbox> </checkbox>

    <rcard> </rcard>
  </div>
    
</template>

<style lang="scss" scoped>

@import "../assets/scss/colors.scss";
@import "../assets/scss/typography.scss";

img{
    max-width: 100%;
    display: block;
  }

.main{
  width: min(90ch, 100% - 4rem);
  margin-inline: auto;
}

h1{
    color: $Madison;
}

</style>
