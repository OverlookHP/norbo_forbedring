<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
im

const products = ref([
/*  
{  
    id: 'id1',
    company: 'Question one',
    email: 'Question one',
    recProduct: 'Answer one',
    usedFor: 'Used for sanding and deburring',
    isExpanded: false // Initial value
  },
  
  */
])



onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "products"))
    let fbProducts = []
    
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  const productArray = {
    id: doc.id,
    productName: doc.data().name,
    tagline: doc.data().tagline,
    text1: doc.data().text1,
    text2: doc.data().text2,
    grinding: doc.data().grinding,
    sanding: doc.data().sanding,
    deburring: doc.data().deburring,
    finishing: doc.data().finishing,
    painting: doc.data().painting,
    dispensing: doc.data().dispensing
  }
    
  fbProducts.push(productArray)
  
  console.log(fbProducts)
});
    products.value = fbProducts
   
    
    
})

</script>

<template>
  
    <h1>Products</h1>


    

    
 
</template>

<style lang="scss" scoped>
@import "../../node_modules/bulma/css/bulma.min.css";
@import "../assets/scss/colors.scss";
@import "../assets/scss/typography.scss";

.allProducts {
    display: flex;
    width: 50;
}

</style>
