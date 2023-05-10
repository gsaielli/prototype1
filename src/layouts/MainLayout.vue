<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="q-pa-xs">
        <q-toolbar class="bg-primary text-white">
          <q-btn icon="menu" flat dense round aria-label="Menu" @click="toggleLeftDrawer">
          </q-btn>

          <q-toolbar-title class="row">
            <img src="mini-logo.png" style="height: 30px; padding-right: 20px;">
            <img src="logo.png" style="height: 30px;">
          </q-toolbar-title>

          <div>by Manitronica SRL</div>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Menù
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Sorgenti',
    caption: 'prototipo 1',
    icon: 'code',
    link: 'https://github.com/gsaielli/prototype1'
  },
  {
    title: 'Docs',
    caption: 'documentazione',
    icon: 'school',
    link: '#'
  },
  {
    title: 'Admin',
    caption: 'modalità admin',
    icon: 'record_voice_over',
    link: '#'
  },
  {
    title: 'Roboqbo',
    caption: 'sito internet',
    icon: 'public',
    link: 'https://www.roboqbo.it/en/welcome/'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
