<template>
  <div>
    <l-map
        style='height: 90vh'
        :zoom="zoom"
        :center="center"
    >
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker
        v-for="(employess, index) in showEmployees"
        :key="index"
        :lat-lng="[employess.gpslat, employess.gpslon]"
        :center="center"
        >
        <l-popup>
          {{ employess.name }}
        </l-popup>
        <l-tooltip>
          {{ employess.name }}
        </l-tooltip>
    </l-marker>
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet'
export default {
  name: 'Maps',
  async created () {
    this.loadEmployees()
  },
  data () {
    return {
      showEmployees: null,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 11,
      center: [-18.8757479, -48.236035099],
      icon: L.icon({
        iconUrl: 'https://cdn.quasar.dev/img/avatar2.jpg',
        // iconUrl: this.showEmployees.avatar,
        iconSize: [25, 25],
        iconAnchor: [16, 37]
      })
    }
  },
  methods: {
    async loadEmployees () {
      var response = await this.$axios.get('/employee')
      this.showEmployees = response.data
    },
    centerUpdate (newcenter) {
      this.center = newcenter
    }
  }
}
</script>
