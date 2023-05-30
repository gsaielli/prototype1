<template>
  <div class="row items-center wrap" style="width: 25vw; padding-top: 10px;">
    <div class="text-center">
      <span class="lcd">{{ value }}</span><span class="um">{{ um }}</span>
    </div>
    <div v-if="store.data[store.phase].Set_Rpm1_Utensile">
      RPM1 {{ store.data[store.phase].Set_Rpm1_Utensile }} |
    </div>
    <div v-if="store.data[store.phase].Set_Rpm2_Utensile">
      RPM2 {{ store.data[store.phase].Set_Rpm2_Utensile }} |
    </div>
    <div v-if="store.data[store.phase].On_Rpm_Utensile">
      On {{ store.data[store.phase].On_Rpm_Utensile }} |
    </div>
    <div v-if="store.data[store.phase].Off_Rpm_Utensile">
      Off {{ store.data[store.phase].Off_Rpm_Utensile }} |
    </div>
    <div v-if="store.data[store.phase].Tempo_Rpm_Utensile">
      M {{ store.data[store.phase].Tempo_Rpm_Utensile }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../stores/data-store'
const store = useDataStore()
interface Props {
  title?: string
  value?: string
  um?: string
  active?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: 'Titolo',
  active: false,
  value: '0',
  um: ''
})

</script>

<style>
@font-face {
  font-family: 'liquidcr';
  src: url('/liquidcr.woff');
}

.lcd {
  color: yellow;
  font-family: 'liquidcr';
  font-size: 45px;
}

.um {
  font-family: 'Arial Narrow', Arial;
  font-size: 20px;
}
</style>
