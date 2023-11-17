<template>
    <div class="main-box">
      <h1>예금 목록</h1>

      <!-- </RouterLink> -->
      <Deposit />
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useCounterStore } from '@/stores/counter'
//   import { RouterLink } from 'vue-router'
  import Deposit from '@/components/Deposit.vue'
  
  const store = useCounterStore()
  
  onMounted(() => {
    store.getdeps()
  })
  
  </script>
  
  <style>
  .main-box {
  justify-content: center;
  align-items: center;
  text-align: center;
}
  </style>
  