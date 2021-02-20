<template>
  <div>
    <l-map
        style='height: 90vh'
        :zoom="zoom"
        :center="center"
    >
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker
        v-for="(employess, index) in markerLatLng"
        :key="index"
        :lat-lng="[employess.lat, employess.long]"
        :icon="icon">
    </l-marker>
    <l-circle
            :lat-lng="circle.center"
            :radius="circle.radius"
            :color="circle.color"
        />
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet'
export default {
  name: 'Maps',
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 5,
      center: [-18.8757479, -48.236035099],
      markerLatLng: [
        {
          lat: -18.8757479,
          long: -48.236035099
        },
        {
          lat: -18.8757479 + 0.9,
          long: -48.236035099 + 0.9
        },
        {
          lat: -18.8757479 - 0.9,
          long: -48.236035099 - 0.9
        }
      ],
      icon: L.icon({
        iconUrl: 'https://cdn.quasar.dev/img/avatar2.jpg',
        iconSize: [35, 35],
        iconAnchor: [16, 37]
      }),
      circle: {
        center: [-18.8757479 + 1, -48.236035099 - 1],
        radius: 60000,
        color: 'red'
      }
    }
  }
}
</script>
