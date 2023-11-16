<template>
  <div>
    <h1>메인 페이지</h1>
    <nav>
      <RouterLink :to="{ name: 'FinView' }">예금비교</RouterLink> |
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

</style>