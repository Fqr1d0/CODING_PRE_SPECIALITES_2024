import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ToAthentificate from '@/views/ToAthentificate.vue'
import ToRegister from '@/views/ToRegister.vue'
import TaskList from '@/views/TaskList.vue'
import TaskEdit from '@/views/TaskEdit.vue'
import TaskCreate from '@/views/TaskCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/Athentification',
      name: 'Athentificate',
      component: ToAthentificate
    },
    {
      path: '/Registering',
      name: 'Register',
      component: ToRegister
    },
    {
      path: '/Teazyboard',
      name: 'Taskboard',
      component: TaskList
    },
    {
      path: '/Task-edit',
      name: 'TaskEdit',
      component: TaskEdit
    },
    {
      path: '/Task-create',
      name: 'TaskCreate',
      component: TaskCreate
    }
  ]
})

export default router
