<template>
    <div>
      <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>Price: {{ product.price }}</p>
        <p>Description: {{ product.description }}</p>
      </div>
    </div>
  </template>
  x
  <script>
  import { ref } from 'vue';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    created() {
      // Access Firebase instance from Vue instance
      const db = this.$firebase.firestore();
  
      // Fetch products from Firestore
      db.collection('products')
        .get()
        .then((querySnapshot) => {
          // Populate products array with data from Firebase
          querySnapshot.forEach((doc) => {
            this.products.push(doc.data());
          });
        })
        .catch((error) => {
          console.error('Error fetching products: ', error);
        });
    },
  };
  </script>
  