<template>
  <div>
      <div class="row justify-center q-mt-lg">
          <q-btn
              class="col-8"
              color="primary"
              label="Coletar Localização"
              push
              size="sm"
              @click="getGeolocation"
          />
      </div>
      <div class="row justify-center" >
          <div class="col-10">
              <p>
                  Latitude: {{ this.latitude }}
              </p>
              <p>
                  Longitude: {{ this.longitude }}
              </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Coordenates',
  data () {
    return {
      latitude: '',
      longitude: ''
    }
  },
  methods: {
    getGeolocation () {
      if (navigator.geolocation) {
        this.$q.loading.show()
        navigator.geolocation.getCurrentPosition(this.setPosition, this.errorPosition)
      } else {
        this.errorPosition()
      }
    },
    setPosition (position) {
      const coords = position.coords
      this.latitude = coords.latitude
      this.longitude = coords.longitude
      this.$q.loading.hide()
      this.successNotify()
    },
    errorPosition () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'negative',
        textColor: 'white',
        actions: [{ icon: 'close', color: 'white' }],
        message: 'Erro na coleta de coordenadas - Ative a Coleta do Browser'
      })
      this.$q.loading.hide()
    },
    successNotify () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'positive',
        textColor: 'white',
        actions: [{ icon: 'check', color: 'white' }],
        message: 'Coordenadas coletadas com sucesso!'
      })
    }
  }
}
</script>
