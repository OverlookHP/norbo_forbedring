<script setup>
import { RouterLink, RouterView } from 'vue-router';
import checkbox from '../components/checkbox.vue';
import rcard from '../components/rcard.vue';
import Automationview from './Automationview.vue';
</script>

<template>
  <div class="main">
    
    <checkbox> </checkbox>

    <rcard> </rcard>

    <router-link to="/Automation">Næste</router-link>
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
