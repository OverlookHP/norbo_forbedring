<script setup>
import Information from '../components/Information.vue';
import Automation from '../components/Automation.vue';
import Surfaces from '../components/Surfaces.vue';
import Informationview from './Informationview.vue';



 
</script>

<template>
  <main>
    
  
  <Informationview> </Informationview>
  


  
  
</main>

</template>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";

.stepContainer {
  width: 25%;
}

.step {
  
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
  background-color: cream;
}

.v-stepper {
  position: relative;
/*   visibility: visible; */
}


/* regular step */
.step .circle {
  background-color: white;
  border: 3px solid gray;
  border-radius: 100%;
  width: 3em;    /* +6 for border */
  height: 3em;
  display: inline-block;
}

.step .line {
    top: 23px;
  left: 12px;
/*   height: 120px; */
  height: 6em;
    
    border-left: 3px solid gray;
}

.lineImg {
  height: 6em;
}

.step.completed .circle {
  visibility: visible;
  background-color: rgb(6,150,215);
  border-color: rgb(6,150,215);
}

.step.completed .line {
  border-left: 3px solid rgb(6,150,215);
}

.step.active .circle {
visibility: visible;
  border-color: rgb(6,150,215);
}

.step.empty .circle {
    visibility: hidden;
}

.step.empty .line {
/*     visibility: hidden; */
/*   height: 150%; */
  top: 0;
  height: 150%;
}


.step:last-child .line {
  border-left: 3px solid white;
  z-index: -1; /* behind the circle to completely hide */
}

.content {
  margin-left: 20px;
  display: inline-block;
}


/* codepen override */
html *
{
   font-size: 15px !important;
   color: #000 !important;
   font-family: Arial !important;
}


</style>