<script setup>

</script>

<template>
    <h1>How much do you expect to automate?</h1>

    <div class="slidecontainer">
        <input type="range" min="30" max="70" value="50" step="20" class="slider" id="myRange">

        <datalist id="markers">
            <option value="30" label="30"></option>
            <option value="50" label="50"></option>
            <option value="70" label="70"></option>
        </datalist>

    </div>
</template>

<style lang="scss" scoped>

@import "../assets/scss/colors.scss";
@import "../assets/scss/typography.scss";

h1{
    color: $Madison;
    margin-bottom: 100px;
}

.slidercontainer{
    width: 100%;
}

.slider{
    width: 100%;
    height: 76px;
    size: 26px;
}

input[type="range"] {
  -webkit-appearance: none;
  margin-right: 15px;
  height:26px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 19px;
  border: 3px solid $Madison;
  background-image: linear-gradient($Madison, $Madison);
  background-repeat: no-repeat;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  background: $Madison;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

</style>
