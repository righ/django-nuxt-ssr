<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          <b-icon
            :icon="icon"
            v-if="icon"
            size="is-large"
            type="is-primary"
          />
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <span v-if="this.$slots">
            <slot />
          </span>
        </div>
      </div>
      <footer class="card-footer" v-if="footer">
        <div class="card-footer-item">

        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    footer: {
      type: String,
      required: false,
    }
  }
}
</script>
