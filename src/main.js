import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Information from './components/Information.vue';
import Robots from './components/Robots.vue';
import Automation from './components/Automation.vue';
import Surfaces from './components/Surfaces.vue';


const app = createApp(App);


app.component('component-a', Information);
app.component('component-b', Robots);
app.component('component-c', Automation);
app.component('component-d', Surfaces);



import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries








// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEoZoOvnyIN74VUW9_59VgMRaO0BgTfho",
  authDomain: "nordbo-tb-2.firebaseapp.com",
  projectId: "nordbo-tb-2",
  storageBucket: "nordbo-tb-2.appspot.com",
  messagingSenderId: "514374256871",
  appId: "1:514374256871:web:aeb833ef8859bb30c5ba42"
};

initializeApp(firebaseConfig);

import './assets/main.scss'
import './assets/scss/typography.scss'



app.use(createPinia())
app.use(router)

app.mount('#app')
