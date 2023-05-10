<template>
  <div class="q-pa-md">
    <q-btn-group rounded>
      <q-btn-dropdown auto-close rounded color="primary" label="Coltello" split>
        <config-page></config-page>
      </q-btn-dropdown>
      <q-btn-dropdown auto-close rounded color="primary" label="TwoTemperatura" split>
        <config-page></config-page>
      </q-btn-dropdown>
      <q-btn-dropdown auto-close rounded color="primary" label="Pressione" split>
        <config-page></config-page>
      </q-btn-dropdown>
      <q-btn-dropdown auto-close rounded color="primary" label="Spatola" split>
        <config-page></config-page>
      </q-btn-dropdown>
    </q-btn-group>
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
