<template>
  <q-list>

    <q-tab-panel name="x">

      <q-item class="q-item">
        <q-item-section avatar>
          <q-avatar :icon="store.data[store.phase].tool" color="primary" text-color="white">
            <q-tooltip>
              Seleziona Attrezzo per la lavorazione
            </q-tooltip>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <div class="q-pa-md">
            <q-btn-dropdown color="primary" label="SELECT">
              <q-list>

                <q-item clickable v-close-popup :active="store.data[store.phase].tool === 'build'"
                  active-class="my-menu-link" @click="store.data[store.phase].tool = 'build'">
                  <q-item-section avatar>
                    <q-icon class="icon" name="build" size="32px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Nome attrezzo 1</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup :active="store.data[store.phase].tool === 'plumbing'"
                  active-class="my-menu-link" @click="store.data[store.phase].tool = 'plumbing'">
                  <q-item-section avatar>
                    <q-icon class="icon" name="plumbing" size="32px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Nome attrezzo 2</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup :active="store.data[store.phase].tool === 'handyman'"
                  active-class="my-menu-link" @click="store.data[store.phase].tool = 'handyman'">
                  <q-item-section avatar>
                    <q-icon class="icon" name="handyman" size="32px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Nome attrezzo 3</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-btn-dropdown>
          </div>
        </q-item-section>
      </q-item>

      <q-item class="q-item">
        <q-item-section avatar style="padding">
          <q-avatar icon="autorenew" color="primary" text-color="white">
            <q-tooltip>
              Rotazioni 1
            </q-tooltip>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-slider color="primary" label-always :label-value="store.data[store.phase].Set_Rpm1_Utensile + ' rpm'" markers
            v-model="store.data[store.phase].Set_Rpm1_Utensile" :marker-labels="[0, 500, 1000, 1500, 2000, 2500, 3000]"
            :min="0" :max="3000">
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
          <q-slider color="primary" label-always :label-value="store.data[store.phase].Set_Rpm2_Utensile + ' rpm'" markers
            v-model="store.data[store.phase].Set_Rpm2_Utensile" :marker-labels="[0, 500, 1000, 1500, 2000, 2500, 3000]"
            :min="0" :max="3000">
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
            <q-input class="col " v-model.number="store.data[store.phase].On_Rpm_Utensile" label="ON (s)" maxlengtM="3"
              type="number">
              <template v-slot:append>
                <q-icon v-if="store.data[store.phase].On_Rpm_Utensile !== 0" name="close"
                  @click="store.data[store.phase].On_Rpm_Utensile = 0" class="cursor-pointer" />
                <q-icon name="schedule" />
              </template>
            </q-input>
            <q-input class="q-pl-md col" v-model.number="store.data[store.phase].Off_Rpm_Utensile" label="OFF (s)"
              maxlengtM="3" type="number">
              <template v-slot:append>
                <q-icon v-if="store.data[store.phase].Off_Rpm_Utensile !== 0" name="close"
                  @click="store.data[store.phase].On_Rpm_Utensile = 0" class="cursor-pointer" />
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
          <q-input class="q-pl-md col" v-model.number="store.data[store.phase].Tempo_Rpm_Utensile"
            label="Mantenimento (s)" maxlengtM="3" type="number">
            <template v-slot:append>
              <q-icon v-if="store.data[store.phase].Tempo_Rpm_Utensile !== 0" name="close"
                @click="store.data[store.phase].Tempo_Rpm_Utensile = 0" class="cursor-pointer" />
              <q-icon name="schedule" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>

    </q-tab-panel>

  </q-list>
</template>

<script setup lang="ts">
import { useDataStore } from '../stores/data-store'
const store = useDataStore()
</script>

<style scoped>
.q-item {
  margin-top: 10px;
  padding-left: 0px;
}

.icon {
  color: gray;
  padding-left: 10px;
}

.my-menu-link {
  color: white;
  background: #1976D2;
}
</style>
