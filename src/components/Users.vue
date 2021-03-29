<template>
  <div>
    <h1>Users</h1>
      <div class="row">
        <User
          v-for="user in users"
          :key="user.id"
          :user="user"
          @deleteUser="deleteUser"
        />

      </div>


  </div>
</template>

<script>

  import User from "./User";
    export default {
        name: "Users",
      components:{
          User,
      },
      data(){
          return{
            users:[]
          }
      },
      mounted(){
          this.getUsersStorage();
      },
      methods:{
        getUsersStorage(){
          let users = localStorage.getItem("users",users) || null;
          users = JSON.parse(users);
          this.users = users ? users : [];

        },

        setUsersStorage(){
          const users = JSON.stringify(this.users)
          localStorage.setItem("users", users);
        },

        deleteUser(id){

          let users = localStorage.getItem("users",users) || null;
          users = JSON.parse(users);
          for(let i=0;i<users.length;i++){
            if(users[i].id == id){
              users.splice(users[i],1)
            }
          }
          users = JSON.stringify(users)
          localStorage.setItem('users',users)
          location.reload()

        },


      }

    }
</script>

<style scoped>

</style>
