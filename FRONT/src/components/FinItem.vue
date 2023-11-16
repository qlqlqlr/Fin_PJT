<template>
    <div>


      
      <h5>{{ fin.id }}</h5>
      <p>{{ fin.kor_co_nm }}</p>
      <p>{{ fin.fin_prdt_nm }}</p>
      <!-- <RouterLink :to="{ name: 'DetailView', params: { id: fin.id }}">
        [Detail]
      </RouterLink> -->
      <hr>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  
  defineProps({
    fin: Object
  })
  </script>
  