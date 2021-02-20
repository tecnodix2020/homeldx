<template>
  <q-card class="q-pa-md" style="max-width: 700px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="employee.name"
        label="Nome *"
        hint="Nome e sobrenome"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu nome']"
      />

      <q-input
        filled
        v-model="employee.email"
        label="Email *"
        hint="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu email']"
      />

      <q-input
        filled
        v-model="employee.job"
        label="Cargo *"
        hint="Cargo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu cargo']"
      />

      <q-input
        filled
        v-model="employee.address"
        label="Endereço *"
        hint="Endereço"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu endereço']"
      />

      <q-select
        filled
        v-model="employee.city"
        label="Cidade *"
        hint="Cidade"
        :options="cities"
      />
      <div>
        <q-btn label="Confirmar" type="submit" color="primary"/>
        <q-btn label="Cancelar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-card>
</template>

<script>
export default {
  data () {
    return {
      // name: null,
      email: null,
      // job: null,
      address: null,
      age: null,
      cities: []
    }
  },

  props: {
    employee: {
      type: Object,
      required: false
    }
  },
  async mounted () {
    var response = await this.$axios.get('/city')
    response.data.map((city) => {
      this.cities.push({ label: city.description, value: city._id })
    })
  },
  methods: {
    async onSubmit () {
      var response = null
      try {
        if (this.employee._id) {
          response = await this.$axios.put(`/employee/${this.employee._id}`, this.employee)
        } else {
          response = await this.$axios.post('/employee', this.employee)
        }
        this.$q.notify({
          message: 'Colaborador salvo com sucesso.',
          icon: 'announcement',
          color: 'primary'
        })
      } catch (error) {
        this.$q.notify({
          message: 'Não foi possível salvar as informações do colaborador',
          icon: 'announcement',
          color: 'warning'
        })
      }
      console.log(response)
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
