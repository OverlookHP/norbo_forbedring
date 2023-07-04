<script setup>

</script>

<template>
    <h1>Do you already have robots?</h1>
    <div class="client section">
        <div class="client-form">
        <form>
            <span>
                <div class="client">
                        <label for="existing" class="label3">Yes</label>
                        <input type="checkbox" id="existing" class="input-check">
                </div>
            </span>

            <span>
                <div class="client">
                        <label for="existing" class="label3">No</label>
                        <input type="checkbox" id="existing" class="input-check">
                </div>
            </span>

        </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import "../assets/scss/colors.scss";
@import "../assets/scss/typography.scss";

.client-form{
    width: 500px;
}



h1{
    color: $Madison;
}

.label1,
.label3{
    margin-right: 3%;
}

.label2{
    margin-right: 6.7%;
}

form {
  display: flex;
  flex-direction: column;
}

span {
  margin-bottom: 20px;
}

.label1,
.label2,
.label3{
    font-size: 20px;
}

.input-check{
    width: 26px;
    height: 26px;
    accent-color: $Madison;
}

.input,
.input-check{ 
    border-radius: 19px;
    font-size: 13px;
    border: 1px solid $Madison;
    color: $Madison;
}


</style>
