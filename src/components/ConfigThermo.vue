<template>
  <q-list padding style="width: 400px">
    <q-separator inset />
    <q-item-label header>CALDO</q-item-label>
    <q-item>
      <q-item-section avatar>
        <q-avatar icon="thermostat" color="red" text-color="white" />
      </q-item-section>
      <q-item-section>
        <q-item-label>
          <q-slider class="" color="deep-orange" label-always markers v-model="valueH"
            :marker-labels="[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125]" :min="0" :max="125">
            <template v-slot:marker-label-group="scope">
              <div v-for="marker in scope.markerList" :key="marker.index"
                :class="[`text-deep-orange-${2 + Math.ceil(marker.value / 2)}`, marker.classes]" :style="marker.style"
                @click="model = marker.value">{{ marker.value }}</div>
            </template>
          </q-slider>
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator inset />
    <q-item-label header>FREDDO</q-item-label>

    <q-item>
      <q-item-section avatar>
        <q-avatar icon="thermostat" color="blue" text-color="white" />
      </q-item-section>
      <q-item-section>
        <q-item-label>
          <q-slider class="" color="deep-orange" label-always markers v-model="valueC" :inner-max="valueH - 1"
            :marker-labels="[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125]" :min="0" :max="125">
            <template v-slot:marker-label-group="scope">
              <div v-for="marker in scope.markerList" :key="marker.index"
                :class="[`text-deep-orange-${2 + Math.ceil(marker.value / 2)}`, marker.classes]" :style="marker.style"
                @click="model = marker.value">{{ marker.value }}</div>
            </template>
          </q-slider>
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable>
      <q-item-section avatar>
        <q-avatar icon="assignment" color="teal" text-color="white" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Immaginare i parametri qui</q-item-label>
        <q-item-label caption>Paramento</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="info" color="amber" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const valueH = ref(0)
const valueC = ref(0)

</script>
