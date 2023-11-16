<template>
    <div>
      <h1>적금 목록</h1>

      <!-- </RouterLink> -->
      <Fin />
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useCounterStore } from '@/stores/counter'
//   import { RouterLink } from 'vue-router'
  import Fin from '@/components/Fin.vue'
  
  const store = useCounterStore()
  
  onMounted(() => {
    store.getFins()
  })
  
  </script>
  
  <style>
  
  </style>
  