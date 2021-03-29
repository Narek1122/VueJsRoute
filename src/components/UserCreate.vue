<template>
  <div>
    <div class="container">
      <h1>UserCreate</h1>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="newUser.name">
        <div class="text-danger font-weight-bold" v-if="errors.users.name">
          {{errors.users.name}}
        </div>
      </div>
      <div class="form-group">
        <label>Surname</label>
        <input type="text" class="form-control" v-model="newUser.surname">
        <div class="text-danger font-weight-bold" v-if="errors.users.surname">
          {{errors.users.surname}}
        </div>
      </div>
      <div class="form-group">
        <label>Gender</label>
        <input type="text" class="form-control" v-model="newUser.gender">
        <div class="text-danger font-weight-bold" v-if="errors.users.gender">
          {{errors.users.gender}}
        </div>
      </div>
      <div class="form-group">
        <label>Age</label>
        <input type="text" class="form-control" v-model="newUser.age">
        <div class="text-danger font-weight-bold" v-if="errors.users.age">
          {{errors.users.age}}
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-success" @click="saveUser">Change</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "UserCreate",
    data(){
      return {
        users: [],
        newUser: {
          name: "",
          surname: "",
          gender: "",
          age: ""
        },
        errors: {
          users: {
            name: "",
            surname: "",
            gender: "",
            age: ""
          }
        },
      }
    },
    mounted() {
      this.getUsersStorage();
    },
    methods: {
      saveUser(){
        this.errors.users.name = this.newUser.name == "" ? "Name is required" : ""
        this.errors.users.surname = this.newUser.surname == "" ? "surname is required" : ""
        this.errors.users.gender = this.newUser.gender == "" ? "gender is required" : ""
        this.errors.users.age = this.newUser.age == "" ? "age is required" : ""
        if(this.errors.users.gender == "" && this.errors.users.name == "" && this.errors.users.surname == "" && this.errors.users.age == ""){
          const user = {};
          user.id = this.generateRandomNumber()
          user.name = this.newUser.name;
          user.surname = this.newUser.surname;
          user.gender = this.newUser.gender;
          user.age = this.newUser.age;
          this.users.push(user)
          this.setUsersStorage();
        }
      },
      setUsersStorage(){
        const users = JSON.stringify(this.users)
        localStorage.setItem("users", users);
      },
      getUsersStorage(){
        let users = localStorage.getItem("users") || null;
        users = JSON.parse(users)
        this.users = users ? users : []
      },
      generateRandomNumber(){
        const d = new Date();
        return d.getTime() + Math.floor(Math.random() * 10);
      },
    }
  }
</script>
<style scoped>
</style>
