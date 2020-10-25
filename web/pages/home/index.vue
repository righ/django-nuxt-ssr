<template>
  <div>
    <table>
      <tbody>
        <tr><th>ID:</th><td>{{ user && user.id }}</td></tr>
        <tr><th>Email:</th><td>{{ user && user.email }}</td></tr>
        <tr><th>Name:</th><td>{{ user && user.name }}</td></tr>
      </tbody>
    </table>
    <button v-on:click="logout()">Logout</button>
  </div>
</template>

<script>
import querystring from 'querystring';
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: "home",
  auth: true,
  methods: {
    async logout() {
      await this.$axios.$post("/api/auth/token/logout");
      this.$store.state.user = null;
      this.$router.push("/");
    },
  },
  data() {
    return {
      user: this.$store.state.user,
    }
  },
});
</script>

