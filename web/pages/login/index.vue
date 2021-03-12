<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        icon="google"
      >
        Login with <a href="http://localhost:8032/oauth/login/google-oauth2/">
          Google
        </a>
      </card>

      <card
        icon="line"
      >
        Login with <a href="http://localhost:8032/oauth/login/line/">
          LINE
        </a>
      </card>

      <card
        title="Login"
      >
        <form>
          <input placeholder="E-mail" />
          <input placeholder="Password" type="password" />
          <button>Submit</button>
        </form>
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
