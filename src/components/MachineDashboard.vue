<template>
  <div class="flex flex-center column nowrap items-center">
    <div class="q-pa-md q-gutter-md row justify-center">
      <q-btn-dropdown color="primary" dropdown-icon="cached">
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
          <div class="text-h4">{{ actual }}/{{ max }}</div>
          <div class="text-subtitle2">fase</div>
        </q-card-section>

        <q-card-actions>
          <q-btn color="warning" icon="arrow_left" size="30px" @click="phaseRev" />
          <q-btn color="warning" icon="arrow_right" size="30px" @click="phaseAdv" />
        </q-card-actions>
      </q-card>
    </div>

    <div class="q-pa-md q-gutter-md">
      <div class="q-gutter-lg">
        <div class="q-gutter-md">
          <q-btn-toggle push rounded glossy toggle-color="purple" :options="[
              { value: 'play', slot: 'one' },
              { value: 'stop', slot: 'two' },
            ]">
            <template v-slot:one>
              <q-icon name="play_arrow" size="100px" />
            </template>
            <template v-slot:two>
              <q-icon name="stop" size="100px" />
            </template>
          </q-btn-toggle>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Todo, Meta } from './models'
import ConfigThermo from './ConfigThermo.vue'
import ConfigTool from './ConfigTool.vue'
import ConfigPage from './ConfigPage.vue'
import ButtonDisplay from './ButtonDisplay.vue'

interface Props {
  title: string
  todos?: Todo[]
  meta: Meta
  active: boolean
}
const props = withDefaults(defineProps<Props>(), {
  todos: () => []
})

const actual = ref(0)
const max = ref(0)

function phaseAdv () {
  actual.value++
  if (actual.value > max.value) { max.value = actual.value }
}

function phaseRev () {
  if (actual.value > 0) { actual.value-- }
}

</script>
