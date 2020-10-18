<template>
  <div>
    <h1>Login Succeeded!</h1>
    <hr />
    <table>
      <tbody>
        <tr><th>ID:</th><td>{{ id }}</td></tr>
        <tr><th>Email:</th><td>{{ email }}</td></tr>
        <tr><th>Name:</th><td>{{ name }}</td></tr>
      </tbody>
    </table>
    <button>Logout</button>
  </div>
</template>
<script>
import querystring from 'querystring';
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: "home vue",
  auth: true,
  async asyncData({ app }) {
    const data = await app.$axios.$get(`/api/accounts/myprofile`);
    return data;
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
});
</script>

