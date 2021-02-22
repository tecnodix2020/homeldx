<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    @click="$emit('form', employee)"
  >
    <q-item-section
      avatar
    >
      <q-avatar color="grey">
        <img :src="avatar" v-if="avatar">
        {{ employee.name.charAt(0) }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ employee.name }}</q-item-label>
      <q-item-label caption>
        {{ employee.job }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-icon name="mode_edit" color="grey" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EmployeesList',
  props: {
    id: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },

    job: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    gpslat: {
      type: Number,
      default: 0
    },

    gpslon: {
      type: Number,
      default: 0
    },

    avatar: {
      type: String,
      default: 'https://cdn.quasar.dev/img/boy-avatar.png'
    },

    employee: {
      type: Object,
      required: true
    }
  }
}
</script>
