<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter()
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Succesfully registered")
            router.push('/clients')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.massage);
        });
};
</script>

<template>
  
  <h1>Login</h1>
    <div class="login-box">
        <img style="width:312px; " src="\src\assets\img\nordbo-logo.webp">
        <div class="login-input">
         <h3>Username   <input class="input is-rounded" type="email" placeholder="Write your E-mail" v-model="email"></h3>
            <br>
         <h3>password<input class="input is-rounded" type="password" placeholder="Write your password" v-model="password"> </h3>
         <button @click="register">login</button>    
        </div>
    </div>
    
</template>

<style scoped>

    .login-box {
        background-color: pink;
        position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 18px;
    }
    .login-input {
        margin: 0 auto;
    }

    .input {
        width: 20vw;
    }

</style>
