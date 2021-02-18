<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Home Office Landix
        </q-toolbar-title>

        <div>Versão {{ version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Colaboradores
        </q-item-label>
        <EssentialLink
          v-for="employee in showEmployees"
          :name="employee.name"
          :job="employee.job"
          :avatar="employee.avatar"
          :key="employee.id"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

const employees = [
  {
    id: '1',
    name: 'Guilherme Ferreira',
    job: 'Desenvolvedor',
    departament: 'Produção',
    avatar: ''
  },
  {
    id: '2',
    name: 'André Vasconcelos',
    job: 'Desenvolvedor',
    departament: 'Produção',
    avatar: ''
  },
  {
    id: '3',
    name: 'Rangel Otoni',
    job: 'Analista de Teste',
    departament: 'Produção',
    avatar: ''
  },
  {
    id: '4',
    name: 'Carla de Mello',
    job: 'Analista de Teste',
    departament: 'Produção',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      showEmployees: employees,
      version: '0.0.1'
    }
  }
}
</script>
