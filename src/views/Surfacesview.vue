<script setup>
import surfacecard from '../components/surfacecard.vue';
</script>

<template>
  
  <div class="main">
    <surfacecard> </surfacecard>
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

</style>
