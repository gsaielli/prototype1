import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import sourceData from 'assets/model.json'
import { useStorage } from '@vueuse/core'
import { io } from 'socket.io-client'

export const useDataStore = defineStore('data', () => {
  const socket = io(`http://${window.location.hostname}:${process.env.PORT}/`)
  const data = useStorage('data', sourceData)
  const data95 = ref(0)
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

  function start() {
    socket.emit('start')
  }

  function stop() {
    socket.emit('stop')
  }

  function test() {
    socket.emit('test', data.value[phase.value])
  }

  socket.on('data', function (x) {
    console.log(x)
    data95.value = x.data[95]
    // const obj = JSON.parse(data)
  })

  return { data, phase, valid1, start, stop, test, data95 }
})
