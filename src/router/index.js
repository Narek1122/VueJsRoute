import Vue from 'vue'
import Router from 'vue-router'

import UserCreate from "../components/UserCreate";
import UserDetails from "../components/UserDetails";
import Users from "../components/Users";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/create',
      name: 'User-Create',
      component: UserCreate
    },
    {
      path: '/user/:user_id/details',
      name: 'User-Details',
      component: UserDetails
    },
  ]
})
