<template>
  <div class="q-pa-md">
    <div class="row q-gutter-lg justify-center">
      <q-btn-dropdown class="" auto-close color="primary" label="Coltello" split>
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <q-icon left name="cached" />
          </div>
        </template>
        <config-page></config-page>
      </q-btn-dropdown>
      <q-btn-dropdown auto-close color="primary" label="Temperatura" split>
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <q-icon left name="thermostat" />
          </div>
        </template>
        <config-page></config-page>
      </q-btn-dropdown>
      <q-btn-dropdown auto-close color="primary" label="Pressione" split>
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <q-icon left name="compress" />
          </div>
        </template>
        <config-page></config-page>
      </q-btn-dropdown>
      <q-btn-dropdown auto-close color="primary" label="Spatola" split>
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <q-icon left name="play_for_work" />
          </div>
        </template>
        <config-page></config-page>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Todo, Meta } from './models'
import ConfigPage from './ConfigPage.vue'

interface Props {
  title: string
  todos?: Todo[]
  meta: Meta
  active: boolean
}
const props = withDefaults(defineProps<Props>(), {
  todos: () => []
})

const clickCount = ref(0)
function increment () {
  clickCount.value += 1
  return clickCount.value
}

const todoCount = computed(() => props.todos.length)

</script>
