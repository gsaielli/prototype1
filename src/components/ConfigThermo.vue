<template>
  <q-list padding style="width: 75vw">

    <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
      narrow-indicator>
      <q-tab name="hot" label="Caldo" />
      <q-tab name="cold" label="Freddo" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>

      <q-tab-panel v-model="tab" name="hot">

        <q-item class="q-item">
          <q-item-section avatar style="padding">
            <q-avatar icon="thermostat" color="red" text-color="white">
              <q-tooltip>
                Set point Caldo
              </q-tooltip>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-slider class="" color="deep-orange" label-always :label-value="valueH + '°C'" markers v-model="valueH"
              :marker-labels="[0, 25, 50, 75, 100, 125]" :min="0" :max="125">
              <template v-slot:marker-label-group="scope">
                <div v-for="marker in scope.markerList" :key="marker.index"
                  :class="[`text-deep-orange-${2 + Math.ceil(marker.value / 2)}`, marker.classes]" :style="marker.style"
                  @click="model = marker.value">{{ marker.value }}°</div>
              </template>
            </q-slider>
          </q-item-section>
        </q-item>

        <q-item class="q-item">
          <q-item-section avatar>
            <q-avatar icon="filter_drama" color="red" text-color="white">
              <q-tooltip>
                Set point Vapore in vasca
              </q-tooltip>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-slider class="" color="deep-orange" label-always :label-value="valueV + '°C'" markers v-model="valueV"
              :marker-labels="[0, 25, 50, 75, 100, 125]" :min="0" :max="125">
              <template v-slot:marker-label-group="scope">
                <div v-for="marker in scope.markerList" :key="marker.index"
                  :class="[`text-deep-orange-${2 + Math.ceil(marker.value / 2)}`, marker.classes]" :style="marker.style"
                  @click="model = marker.value">{{ marker.value }}°</div>
              </template>
            </q-slider>
          </q-item-section>
        </q-item>

        <q-item class="q-item">
          <q-item-section avatar>
            <q-avatar icon="rule" color="red" text-color="white">
              <q-tooltip>
                Intermittenza ON / OFF Caldo
              </q-tooltip>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <div class="row">
              <q-input class="col " v-model.number="tOnH" label="ON (s)" maxlength="3" :dense="dense" type="number">
                <template v-slot:append>
                  <q-icon v-if="tOnH !== 0" name="close" @click="tOnH = 0" class="cursor-pointer" />
                  <q-icon name="schedule" />
                </template>
              </q-input>
              <q-input class="q-pl-md col" v-model.number="tOffH" label="OFF (s)" maxlength="3" :dense="dense"
                type="number">
                <template v-slot:append>
                  <q-icon v-if="tOffH !== 0" name="close" @click="tOnH = 0" class="cursor-pointer" />
                  <q-icon name="schedule" />
                </template>
              </q-input>
            </div>
          </q-item-section>
        </q-item>

        <q-item class="q-item">
          <q-item-section avatar>
            <q-avatar icon="hourglass_top" color="red" text-color="white">
              <q-tooltip>
                Tempo di Mantenimento Caldo
              </q-tooltip>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-input class="q-pl-md col" v-model.number="tH" label="Mantenimento (s)" maxlength="3" :dense="dense"
              type="number">
              <template v-slot:append>
                <q-icon v-if="tH !== 0" name="close" @click="tH = 0" class="cursor-pointer" />
                <q-icon name="schedule" />
              </template>
            </q-input>
          </q-item-section>
        </q-item>

      </q-tab-panel>

      <q-tab-panel v-model="tab" name="cold" style="margin-top: 10px;">

        <q-item class="q-item">
          <q-item-section avatar style="padding">
            <q-avatar icon="thermostat" color="blue" text-color="white">
              <q-tooltip>
                Set point Caldo
              </q-tooltip>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-slider class="" color="blue" label-always :label-value="valueC + '°C'" markers v-model="valueC"
              :inner-max="valueH - 1" :marker-labels="[0, 25, 50, 75, 100, 125]" :min="0" :max="125">
              <template v-slot:marker-label-group="scope">
                <div v-for="marker in scope.markerList" :key="marker.index"
                  :class="[`text-blue-${2 + Math.ceil(marker.value / 2)}`, marker.classes]" :style="marker.style"
                  @click="model = marker.value">{{ marker.value }}°</div>
              </template>
            </q-slider>
          </q-item-section>
        </q-item>

        <q-item class="q-item">
          <q-item-section avatar>
            <q-avatar icon="ac_unit" color="blue" text-color="white">
              <q-tooltip>
                Set point Gelida
              </q-tooltip>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-slider class="" color="blue" label-always :label-value="valueG + '°C'" markers v-model="valueG"
              :marker-labels="[0, 25, 50, 75, 100, 125]" :min="0" :max="125">
              <template v-slot:marker-label-group="scope">
                <div v-for="marker in scope.markerList" :key="marker.index"
                  :class="[`text-blue-${2 + Math.ceil(marker.value / 2)}`, marker.classes]" :style="marker.style"
                  @click="model = marker.value">{{ marker.value }}°</div>
              </template>
            </q-slider>
          </q-item-section>
        </q-item>

        <q-item class="q-item">
          <q-item-section avatar>
            <q-avatar icon="rule" color="blue" text-color="white">
              <q-tooltip>
                Intermittenza ON / OFF Freddo
              </q-tooltip>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <div class="row">
              <q-input class="col" v-model.number="tOnC" label="ON (s)" maxlength="3" :dense="dense" type="number">
                <template v-slot:append>
                  <q-icon v-if="tOnC !== 0" name="close" @click="tOnC = 0" class="cursor-pointer" />
                  <q-icon name="schedule" />
                </template>
              </q-input>
              <q-input class="q-pl-md col" v-model.number="tOffC" label="OFF (s)" maxlength="3" :dense="dense"
                type="number">
                <template v-slot:append>
                  <q-icon v-if="tOffC !== 0" name="close" @click="tOnC = 0" class="cursor-pointer" />
                  <q-icon name="schedule" />
                </template>
              </q-input>
            </div>
          </q-item-section>
        </q-item>

        <q-item class="q-item">
          <q-item-section avatar>
            <q-avatar icon="hourglass_top" color="blue" text-color="white">
              <q-tooltip>
                Tempo di Mantenimento Freddo
              </q-tooltip>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-input class="q-pl-md col" v-model.number="tC" label="Mantenimento (s)" maxlength="3" :dense="dense"
              type="number">
              <template v-slot:append>
                <q-icon v-if="tH !== 0" name="close" @click="tH = 0" class="cursor-pointer" />
                <q-icon name="schedule" />
              </template>
            </q-input>
          </q-item-section>
        </q-item>

      </q-tab-panel>

    </q-tab-panels>
  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const valueH = ref(0)
const valueC = ref(0)
const valueV = ref(0)
const valueG = ref(0)
const tab = ref('hot')
const tOnH = ref(0)
const tOffH = ref(0)
const tH = ref(0)
const tOnC = ref(0)
const tOffC = ref(0)
const tC = ref(0)
</script>

<style scoped>
.q-item {
  margin-top: 10px;
  padding-left: 0px;
}
</style>
