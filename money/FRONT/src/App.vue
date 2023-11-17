<template>
  <div class="main-box">
   
    <nav>
      <RouterLink :to="{ name: 'depositView' }">예금상품</RouterLink> |
      <RouterLink :to="{ name: 'FinView' }">적금상품</RouterLink>
      <!-- <RouterLink :to="{ name: 'SignUpView' }">SignUp</RouterLink> |
      <RouterLink :to="{ name: 'LogInView' }">LogIn</RouterLink> -->
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
.main-box {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>