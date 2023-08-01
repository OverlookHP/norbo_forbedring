<script setup>
import { RouterLink, RouterView } from 'vue-router';
import dragbar from '../components/dragbar.vue';
import Surfacesview from './Surfacesview.vue';
</script>

<template>
  <div class="main">
    <dragbar> </dragbar>
    <router-link to="/Surfaces">Næste</router-link>
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
