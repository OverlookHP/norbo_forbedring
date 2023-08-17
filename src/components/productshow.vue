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
    //definerer komponentens indledende tilstand, her er det Products som vi gerne vil have skrevet i et array
    data() {
      return {
        products: [],
      };
    },
    //created bruges til at køre koden inden for {} når vue komponten er blevet oprettet.
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
        //fallback til hvis der sker en fejl.
        .catch((error) => {
          console.error('Error fetching products: ', error);
        });
    },
  };
  </script>
  