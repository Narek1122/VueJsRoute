<template>
<div class="col-4">
  <p>name : {{user.name}}</p>
  <p>surname : {{user.surname}}</p>
  <router-link :to="{name:'User-Details',params:{user_id: user.id}}" class="btn btn-warning">
    Show
  </router-link>
  <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
</div>
</template>

<script>

    export default {
        name: "User",
        props: {
          user : {type: Object,default: () => {}}
        },
      methods:{
          deleteUser(id){
            this.$emit("deleteUser", id);
          }
      }


    }
</script>

<style scoped>

</style>
