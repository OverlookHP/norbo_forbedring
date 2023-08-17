<script setup>

import { ref, reactive, setBlockTracking, onMounted } from 'vue';
import { Collapse } from 'vue-collapsed';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase'




const companys = ref([
/*  
{  
    id: 'id1',
    company: 'Question one',
    email: 'Question one',
    recProduct: 'Answer one',
    usedFor: 'Used for sanding and deburring',
    isExpanded: false // Initial value
  },
  {
    id: 'id2',
    company: 'Question two',
    email: 'Question one',
    recProduct: 'Answer two',
    usedFor: 'Used for sanding and deburring',
    isExpanded: false
  },
  {
    id: 'id3',
    company: 'Triangle construction',
    email: 'Tri-construction@help.com',
    recProduct: 'Mimic IR on Universal robot',
    usedFor: 'Used for sanding and deburring',
    isExpanded: false
  }
  */
])
const companysID = ref({

})
const fbCompaniesID = []

//koden bliver først kaldt når den er blevet mounted på DOM
onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "companies"))
    let fbCompanies = []
    //Gør igennem hvert "doc" i databasen og opretter et opject for hvert company
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  const companyArray = {
    id: doc.id,
    company: doc.data().company,
    email: doc.data().email,
    recProduct: doc.data().recProduct,
    usedFor: doc.data().usedFor,
    isExpanded: doc.data().isExpanded
  }
  const nrCompanyArray = doc.data().isExpanded
  
  fbCompanies.push(companyArray)
  fbCompaniesID.push(nrCompanyArray)
  console.log(nrCompanyArray)
});
    companys.value = fbCompanies
    companysID.value = fbCompaniesID
    
    
})


function handleAccordion(selectedIndex) {
    Object.keys(companyReactive).forEach((_, index) => {
        console.log(companys),
    console.log(fbCompaniesID[index]),
    companyReactive[index] = index === selectedIndex ? !companyReactive[index] : false
  })
}

const newCompanyName = ref('')
const newCompanyEmail = ref('')
const newCompanyRecProduct = ref('')
const newCompanyUsedFor = ref('')

const hello = fbCompaniesID[0] 
const companyReactive = reactive([
  {
    isExpanded: { fbCompaniesID }
  },
  
])
console.log(fbCompaniesID[0])
const addCompany = () => {
    const newCompany = {
        id: 'id1',
        company: newCompanyName.value,
        email: newCompanyEmail.value,
        recProduct: newCompanyRecProduct.value,
        usedFor: newCompanyUsedFor.value,
        isExpanded: false
    }
    newCompanyName.value = '',
    newCompanyEmail.value = '',
    newCompanyRecProduct.value = '',
    newCompanyUsedFor.value = ''
    console.log('newCompany', newCompany)
}
</script>


<template>company
   
    <div class="container client--content">
        <h1 style="text-align: left;">Clients</h1>
        
        <br>

        <div class="columns">
            <div class="column button--half">
                <h3>
                Company name
                </h3>
        </div>
            <div class="column button--half">
                <h3>
                Email
            </h3>
        </div>
        </div>

        <div v-for="(company, index) in companys" :key="company.company">
    <button class="button--color" @click="() => handleAccordion(index)">
      <span class="button--half company-name">{{ company.company }}</span>
      <span class="button--half email">{{ company.email }}</span>
    </button>
    <Collapse :when="companyReactive[index].isExpanded" class="collapse">
        <h3>Recomenden products</h3>
        <p>
        {{ company.recProduct }}
        {{ company.usedFor }}
      </p>
    </Collapse>
    <hr>
  </div>
    </div>

    <form  @submit.prevent="addCompany">
       
        <div class="field is-grouped mb-5">
            <p class="control is-expanded">
                <input v-model="newCompanyName" type="text" class="input inputTry" placeholder="add company name">
                <input v-model="newCompanyEmail" type="text" class="input inputTry" placeholder="add company email">
                <input v-model="newCompanyRecProduct" type="text" class="input inputTry" placeholder="add RecProduct">
                <input v-model="newCompanyUsedFor" type="text" class="input inputTry" placeholder="add uses">
                
            </p>    
                <p class="control">
                    <button
                    :disabled="!newCompanyName"
                    class="button is-info">
                        add
                    </button>
                </p>
            
        </div>
        
    </form>
    
</template>

<style lang="scss" scoped>
@import "../../node_modules/bulma/css/bulma.min.css";
@import "../assets/scss/colors.scss";
@import "../assets/scss/typography.scss";

    hr {
        margin: auto;
        background-color: #02215c;
    }

    .client--content {
        margin-top: 5em;
        top: 50%;
        width: 60%;
        text-align: center;
        font-size: 18px;
    }

    .button--color{
        background-color: white;
        border: none;
        width: 100%;
        height: 4em;
        text-align: center;
    }

    .button--half {
        width: 50%;
        height: 4em;
        display: inline-block;
        text-align: left;
        margin-top: 1.5em;
        font-family: 'Ubuntu', sans-serif;
        color: $Midnight-Green;
    
    }

    .collapse {
  transition: height 600ms cubic-bezier(0.3, 0, 0.6, 1);
}

    .inputTry {
        width: 200px;
        margin: 0 auto;
    }

</style>
