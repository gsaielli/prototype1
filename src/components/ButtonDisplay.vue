<template>
  <div class="row items-center no-wrap" style="width: 120px;">
    <div class="text-center">
      {{ title }}<br><span class="lcd">{{ value }}</span><br><span class="um">{{ um }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  src: url('liquidcr.woff') format('woff');
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
