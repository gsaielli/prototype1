import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import sourceData from 'assets/model.json'
import { useStorage } from '@vueuse/core'

export const useDataStore = defineStore('data', () => {
  const data = useStorage('data', sourceData)
  // watch(data,
  //   (val, old) => {
  //     if (old !== undefined) {
  //       window.localStorage.setItem('data', JSON.stringify(val))
  //       // socket.emit('writeModel', JSON.stringify(val))
  //     }
  //   },
  //   {
  //     deep: true,
  //     immediate: true
  //   }
  // )
  const phase = ref(0)

  const valid1 = computed(() => {
    // return ((data.Set_Rpm1_Utensile > 0) && (data.Tempo_Rpm_Utensile > 0))
    //   || (data.Set_Caldo > 0)
    //   || (data.Set_Freddo > 0)
    //   || (data.Set_Vuoto !== 0)
    //   || (data.Set_Pressione_In > 0)
    //   || (data.Set_Pressione_Out > 0)
    const x = data.value[phase.value]
    return ((x.Set_Rpm1_Utensile > 0 && x.On_Rpm_Utensile > 0) || (x.Set_Rpm2_Utensile > 0 && x.Off_Rpm_Utensile > 0)) &&
      x.Tempo_Rpm_Utensile > 0
  })

  return { data, phase, valid1 }
})
