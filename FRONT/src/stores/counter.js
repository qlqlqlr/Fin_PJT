import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter', () => {
  const fins = ref([])
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
  return { fins, API_URL, getFins }
}, { persist: true })