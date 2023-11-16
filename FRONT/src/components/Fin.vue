<template>
    <div>
      <h3>금융상품 목록</h3>
      
      
    <select v-model="selectedCondition" @change="filterFins">
      <!-- 필터링할 조건을 선택할 수 있는 select 요소 -->
      <option value="우리은행">우리은행</option>
      <option value="한국스탠다드차타드은행">한국스탠다드차타드은행</option>
      <option value="대구은행">대구은행</option>
      <option value="부산은행">부산은행</option>
      <option value="광주은행">광주은행</option>
      <option value="제주은행">제주은행</option>
      <option value="전북은행">전북은행</option>
      <option value="경남은행">경남은행</option>
      <option value="중소기업은행">중소기업은행</option>
      <option value="한국산업은행">한국산업은행</option>
      <option value="국민은행">국민은행</option>
      <option value="신한은행">신한은행</option>
      <option value="농협은행주식회사">농협은행주식회사</option>
      <option value="하나은행">하나은행</option>
      <option value="주식회사 케이뱅크">주식회사 케이뱅크</option>
      <option value="수협은행">수협은행</option>
      <option value="주식회사 카카오뱅크">주식회사 카카오뱅크</option>
      <option value="토스뱅크 주식회사">토스뱅크 주식회사</option>
      <!-- 필요한 만큼의 옵션들을 추가 -->
    </select>
    <button @click="filterFinsBySelectedBank">선택</button>    
<!--선택 버튼 클릭시 select 된 은행과 일치하는 항목들만 출력  -->

<div v-if="filteredFins.length > 0">
      <FinItem
        v-for="fin in filteredFins"
        :key="fin.id"
        :fin="fin"
      />
    </div>
    <div v-else>
      선택된 은행에 해당하는 항목이 없습니다.
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useCounterStore } from '@/stores/counter'
  import FinItem from './FinItem.vue'
  
  const store = useCounterStore()
  console.log(store.fins)



const selectedCondition = ref('')
const filteredFins = ref([])

// 선택된 은행에 따라 데이터 필터링
const filterFinsBySelectedBank = () => {
  if (selectedCondition.value) {
    filteredFins.value = store.fins.filter(fin => fin.kor_co_nm === selectedCondition.value)
  } else {
    filteredFins.value = []
  }
}
  </script>