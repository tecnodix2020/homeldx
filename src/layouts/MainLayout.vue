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
          <q-btn class="q-ml-md" color="primary" icon="add" @click="newEmployee"/>
        </q-item-label>
        <my-list
          v-for="employee in showEmployees"
          :id="employee.id"
          :name="employee.name"
          :job="employee.job"
          :avatar="employee.avatar"
          :key="employee.id"
          :employee="employee"
          v-on:form="editForm"
        />
      </q-list>
      <my-coordenates/>
    </q-drawer>

    <q-dialog v-model="edit">
      <div>
        <my-form
          :employee="employeeForm"
          v-on:closeForm="closeForm()"
        />
      </div>
    </q-dialog>
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
import Form from 'components/Form.vue'

export default {
  name: 'MainLayout',
  components: {
    'my-list': EmployeesList,
    'my-coordenates': Coordenates,
    'my-map': Maps,
    'my-form': Form
  },
  async created () {
    this.loadEmployees()
  },
  data () {
    return {
      edit: false,
      leftDrawerOpen: false,
      showEmployees: null,
      version: '0.0.1',
      employeeForm: null
    }
  },
  methods: {
    editForm (object) {
      this.employeeForm = object
      this.edit = true
    },
    newEmployee () {
      this.employeeForm = {}
      this.edit = true
    },
    async closeForm () {
      this.edit = !this.edit
      this.loadEmployees()
    },
    async loadEmployees () {
      var response = await this.$axios.get('/employee')
      this.showEmployees = response.data
    }
  }
}
</script>
