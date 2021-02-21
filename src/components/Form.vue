<template>
  <q-card class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div class="row">
      <q-input
        col
        filled
        v-model="employee.name"
        label="Nome *"
        hint="Nome e sobrenome"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu nome']"
      />

      <q-input
        class="q-ml-md"
        filled
        v-model="employee.email"
        label="Email *"
        hint="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu email']"
      />
    </div>

      <q-input
        filled
        v-model="employee.job"
        label="Cargo *"
        hint="Cargo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu cargo']"
      />

      <div class="row">
        <q-input
          filled
          v-model="employee.state"
          label="Estado *"
          hint="Estado"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor, digite o estado onde mora']"
        />

        <q-input
          filled
          v-model="employee.city"
          label="Cidade *"
          hint="Cidade"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor, digite a cidade onde mora']"
        />
      </div>

      <q-input
        filled
        v-model="employee.address"
        label="Endereço *"
        hint="Endereço"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, digite seu endereço']"
      />

      <q-input
        filled
        v-model="employee.neighborhood"
        label="Bairro *"
        hint="Bairro"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, digite o bairro onde mora']"
      />

      <div>
        <q-btn label="Confirmar" type="submit" color="primary"/>
        <q-btn label="Cancelar" type="reset" @click="$emit('closeForm')" color="primary" flat class="q-ml-sm" />
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
    this.cities = response.data
  },
  methods: {
    async onSubmit () {
      this.employee.city_id = this.employee.city._id
      try {
        if (this.employee._id) {
          await this.$axios.put(`/employee/${this.employee._id}`, this.employee)
        } else {
          await this.$axios.post('/employee', this.employee)
        }
        this.$emit('closeForm')
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
    },

    onReset () {
      this.$root.$emit('closeForm')
    }
  }
}
</script>
