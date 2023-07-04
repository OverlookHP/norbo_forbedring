<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Information from './components/Information.vue';
import Robots from './components/Robots.vue';
import Automation from './components/Automation.vue';
import Surfaces from './components/Surfaces.vue';
</script>

<template>
  
  <Header> </Header>

  <RouterView> </RouterView >

  
<Information> </Information>

  <Robots> </Robots>

  <Automation> </Automation>

  <Surfaces> </Surfaces>
    
</template>

<style scoped>

</style>
