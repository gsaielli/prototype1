<template>
  <q-list padding style="width: 75vw">

    <q-tab-panel>

      <q-item class="q-item">
        <q-item-section avatar style="padding">
          <q-avatar icon="autorenew" color="primary" text-color="white">
            <q-tooltip>
              Rotazioni 1
            </q-tooltip>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-slider color="primary" label-always :label-value="rpm1 + ' rpm'" markers v-model="rpm1"
            :marker-labels="[0, 100, 500, 1000, 1500, 2000, 2500, 3000]" :min="0" :max="3000">
            <template v-slot:marker-label-group="scope">
              <div v-for="marker in scope.markerList" :key="marker.index"
                :class="[`text-primary-${2 + Math.ceil(marker.value / 2)}`, marker.classes]" :style="marker.style"
                @click="model = marker.value">{{ marker.value }}</div>
            </template>
          </q-slider>
        </q-item-section>
      </q-item>

      <q-item class="q-item">
        <q-item-section avatar>
          <q-avatar icon="autorenew" color="primary" text-color="white">
            <q-tooltip>
              Rotazioni 2
            </q-tooltip>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-slider color="primary" label-always :label-value="rpm2 + ' rpm'" markers v-model="rpm2"
            :marker-labels="[0, 100, 500, 1000, 1500, 2000, 2500, 3000]" :min="0" :max="3000">
            <template v-slot:marker-label-group="scope">
              <div v-for="marker in scope.markerList" :key="marker.index"
                :class="[`text-primary-${2 + Math.ceil(marker.value / 2)}`, marker.classes]" :style="marker.style"
                @click="model = marker.value">{{ marker.value }}</div>
            </template>
          </q-slider>
        </q-item-section>
      </q-item>

      <q-item class="q-item">
        <q-item-section avatar>
          <q-avatar icon="rule" color="primary" text-color="white">
            <q-tooltip>
              Intermittenza ON / OFF Caldo
            </q-tooltip>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <div class="row">
            <q-input class="col " v-model.number="tOn" label="ON (s)" maxlengtM="3" type="number">
              <template v-slot:append>
                <q-icon v-if="tOn !== 0" name="close" @click="tOn = 0" class="cursor-pointer" />
                <q-icon name="schedule" />
              </template>
            </q-input>
            <q-input class="q-pl-md col" v-model.number="tOff" label="OFF (s)" maxlengtM="3" type="number">
              <template v-slot:append>
                <q-icon v-if="tOff !== 0" name="close" @click="tOn = 0" class="cursor-pointer" />
                <q-icon name="schedule" />
              </template>
            </q-input>
          </div>
        </q-item-section>
      </q-item>

      <q-item class="q-item">
        <q-item-section avatar>
          <q-avatar icon="hourglass_top" color="primary" text-color="white">
            <q-tooltip>
              Tempo di Mantenimento Caldo
            </q-tooltip>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-input class="q-pl-md col" v-model.number="tM" label="Mantenimento (s)" maxlengtM="3" type="number">
            <template v-slot:append>
              <q-icon v-if="tM !== 0" name="close" @click="tM = 0" class="cursor-pointer" />
              <q-icon name="schedule" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>

    </q-tab-panel>

  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rpm1 = ref(0)
const rpm2 = ref(0)
const tOn = ref(0)
const tOff = ref(0)
const tM = ref(0)
</script>

<style scoped>
.q-item {
  margin-top: 10px;
  padding-left: 0px;
}
</style>
