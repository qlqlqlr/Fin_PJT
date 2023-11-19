<template>
  <div class="main-box">
   
    <nav  v-if="store.isLogin">
      <RouterLink :to="{ name: 'ArticleView' }">Articles</RouterLink> ||
      <RouterLink :to="{ name: 'depositView' }">예금상품</RouterLink> |
      <RouterLink :to="{ name: 'FinView' }">적금상품</RouterLink>
      <form @submit.prevent="store.logOut">
        <input type="submit" value="logOut">
      </form>
    </nav>
    <nav v-else>
      <RouterLink :to="{ name: 'SignUpView' }">SignUp</RouterLink> |
      <RouterLink :to="{ name: 'LogInView' }">LogIn</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()
</script>

<style scoped>
.main-box {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>