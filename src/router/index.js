import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Customer from '@/components/customer/Customer'
import Linkman from '@/components/linkman/Linkman'
import UpdatePwd from '@/components/UpdatePwd'
import DetailsCustomer from '@/components/customer/DetailsCustomer'
import AddLinkman from '@/components/linkman/AddLinkman'
import Users from '@/components/user/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          path: 'customer',
          name: 'Customer',
          component: Customer
        },
        {
          path: 'linkman',
          name: 'Linkman',
          component: Linkman
        },
        {
          path: 'updatePwd',
          name: 'UpdatePwd',
          component: UpdatePwd
        },
        {
          path: 'detailsCustomer',
          name: 'DetailsCustomer',
          component: DetailsCustomer
        },
        {
          path: 'addLinkman',
          name: 'AddLinkman',
          component: AddLinkman
        },
        {
          path: 'users',
          name: 'Users',
          component: Users
        },


      ]
    }
  ]
})
