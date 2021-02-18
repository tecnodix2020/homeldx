<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      avatar
    >
      <q-avatar color="grey">
        <img :src="avatar" v-if="avatar">
        {{ name.charAt(0) }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption>
        {{ job }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-icon name="mode_edit" color="grey" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    name: {
      type: String,
      required: true
    },

    job: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    avatar: {
      type: String,
      default: 'https://cdn.quasar.dev/img/boy-avatar.png'
    }
  }
}
</script>
