import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useCounterStore = defineStore('counter', () => {
  const fins = ref([])
  const opts = ref([])
  const deps = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const router = useRouter()
  const articles = ref([])
  const token = ref(null)
  const isLogin = computed(() => {
    if (token.value === null) {
      return false
    } else {
      return true
    }
  })


  // DRF에 조회 요청을 보내는 action
  const getFins = function () {
    axios({
      method: 'get',
      url: `${API_URL}/Fin/deposit-products/`
    })
      .then((res) =>{
        console.log(res)
        fins.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
  

  const getopt = function () {
    axios({
      method: 'get',
      url: `${API_URL}/Fin/deposit-product-options/<str:fin_prdt_cd>/`
    })
      .then((res) =>{
        console.log(res)
        opts.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getdeps = function () {
    axios({
      method: 'get',
      url: `${API_URL}/Fin/Generaldeposit-products`
    })
      .then((res) =>{
        console.log(res)
        deps.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  const getArticles = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/articles/`,
      headers: {
        Authorization: `Token ${token.value}`
      }
    })
      .then((res) =>{
        // console.log(res)
        articles.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const signUp = function (payload) {
    const { username, password1, password2 } = payload

    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, password1, password2
      }
    })
      .then((res) => {
        console.log(res)
        const password = password1
        logIn({ username, password })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const logIn = function (payload) {
    const { username, password } = payload

    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username, password
      }
    })
      .then((res) => {
        console.log(res.data)
        token.value = res.data.key
        router.push({ name: 'ArticleView' })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const logOut = function () {
    axios({
      method: 'post',
      url: `${API_URL}/accounts/logout/`,
    })
      .then((res) => {
        token.value = null
        router.push({ name: 'ArticleView' })
      })
      .catch((err) => {
        console.log(err)
      })
  }




  return { articles, deps, fins, opts, API_URL, getFins, getopt, getdeps, getArticles, signUp, logIn, token, isLogin, logOut }

}, { persist: true })