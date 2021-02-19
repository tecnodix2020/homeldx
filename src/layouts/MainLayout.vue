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
        <my-list
          v-for="employee in showEmployees"
          :name="employee.name"
          :job="employee.job"
          :avatar="employee.avatar"
          :key="employee.id"
          @click="edit = !edit"
        />
      </q-list>
      <my-coordenates/>
    </q-drawer>

    <q-page-container>
      <my-map/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EmployeesList from 'components/EmployeesList.vue'
import Coordenates from 'components/Coordenates.vue'
import Maps from 'components/Maps.vue'

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
  components: {
    'my-list': EmployeesList,
    'my-coordenates': Coordenates,
    'my-map': Maps
  },
  data () {
    return {
      edit: false,
      leftDrawerOpen: false,
      showEmployees: employees,
      version: '0.0.1'
    }
  }
}
</script>
