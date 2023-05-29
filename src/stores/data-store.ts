import { defineStore } from 'pinia'
import { ref } from 'vue'
import sourceData from 'assets/data.json'
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

  return { data }
})
