import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter', () => {
  const fins = ref([])
  const opts = ref([])
  const deps = ref([])
  const API_URL = 'http://127.0.0.1:8000'

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
  




  return { deps, fins, opts, API_URL, getFins, getopt, getdeps }

}, { persist: true })