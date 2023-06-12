<template>
  <div class="flex flex-center column nowrap items-center">
    <div class="q-pa-md q-gutter-md row justify-center">
      <q-btn-dropdown color="primary" dropdown-icon="settings">
        <template v-slot:label>
          <button-display title="Utensile" um="rpm" value='200'></button-display>
        </template>
        <config-tool />
      </q-btn-dropdown>
      <q-btn-dropdown color="primary" dropdown-icon="thermostat">
        <template v-slot:label>
          <button-display title="Temperatura" um="°C" value='82.5'></button-display>
        </template>
        <config-thermo></config-thermo>
      </q-btn-dropdown>
      <q-btn-dropdown color="primary" dropdown-icon="compress">
        <template v-slot:label>
          <button-display title="Pressione" um="bar" value='1.65'></button-display>
        </template>
        <config-page></config-page>
      </q-btn-dropdown>
      <q-btn-dropdown color="primary" dropdown-icon="play_for_work">
        <template v-slot:label>
          <button-display title="Spatola" um="y/n" value='y'></button-display>
        </template>
        <config-page></config-page>
      </q-btn-dropdown>
    </div>

    <div class="q-pa-md q-gutter-md">
      <q-card>
        <q-card-section class="bg-red text-white text-center">
          <div class="text-h4">{{ store.phase + 1 }}/{{ store.data.length }}</div>
          <div class="text-subtitle2">fase</div>
        </q-card-section>

        <q-card-actions>
          <q-btn color="primary" icon="arrow_left" size="30px" @click="phaseRev" />
          <q-btn color="warning" icon="delete" size="30px" @click="phaseDel" />
          <q-btn color="primary" icon="arrow_right" size="30px" @click="phaseAdv" />
        </q-card-actions>
      </q-card>
    </div>

    <div class="q-pa-md q-gutter-md">
      <div class="q-gutter-lg">
        <div class="q-gutter-md">
          <q-btn-toggle push rounded glossy toggle-color="purple" :options="[
              { value: 'play', slot: 'one' },
              { value: 'stop', slot: 'two' },
            ]" model-value="play">
            <template v-slot:one>
              <q-icon name="play_arrow" size="100px" @click="store.start" />
            </template>
            <template v-slot:two>
              <q-icon name="stop" size="100px" @click="store.stop" />
            </template>
          </q-btn-toggle>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { Todo, Meta } from './models'
import { ref } from 'vue'
import ConfigThermo from './ConfigThermo.vue'
import ConfigTool from './ConfigTool.vue'
import ConfigPage from './ConfigPage.vue'
import ButtonDisplay from './ButtonDisplay.vue'
import { useDataStore } from '../stores/data-store'
const store = useDataStore()

// interface Props {
//   title: string
//   todos?: Todo[]
//   meta: Meta
//   active: boolean
// }
// const props = withDefaults(defineProps<Props>(), {
//   todos: () => []
// })

const play = ref('')

function phaseAdv () {
  if (store.valid1) {
    store.phase++
    if (store.phase >= store.data.length) {
      store.data.push({ tool: 'build' })
    }
  } else {
    alert('Errore nell impostazione della fase')
  }
}

function phaseRev () {
  if (store.phase > 0 && store.valid1) {
    store.phase--
  } else {
    alert('Errore nell impostazione della fase')
  }
}

function phaseDel () {
  // ce ne deve rimanere almeno una
  if (store.data.length > 1) {
    store.data.splice(store.phase, 1)
  }
  // se cancelli l'ultima fase (es.5) e il puntatore è alla fine (es. 5), dopo la cancellazione il puntatore deve tornare indietro
  if (store.phase >= store.data.length) {
    store.phase--
  }
}

</script>
