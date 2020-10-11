<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        title="Free"
        icon="github"
      >
        <nuxt-link to="/login">Login</nuxt-link>
      </card>

    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
