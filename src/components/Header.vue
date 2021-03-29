<template>
  <div class="bg-dark text-white">
    <ul class="d-flex">
      <li>
        <router-link :to="{name: 'Users'}">Users</router-link>
      </li>
      <li>
        <router-link :to="{name: 'User-Create'}">Users Create</router-link>
      </li>
      <li>
        <router-link :to="{name: 'User-Details'}">User Details</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
