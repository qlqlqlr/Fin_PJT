<!-- <template>
    <div>
      <p>은행명 : {{ fin.kor_co_nm }}</p>
      <p>상품명 :{{ fin.fin_prdt_nm }}</p>
      <FinOption
        v-for="opt in fin.options"
        :key="opt.id"
        :opt="opt"
      />
      
      <hr>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  import FinOption from './FinOption.vue'

  defineProps({
    fin: Object
  })
  </script>
   -->