import { createRouter, createWebHistory } from 'vue-router'
import AllProjects from "../views/projects/AllProjects.vue"
import CreateProject from "../views/CreateProject.vue"
import CompletedProjects from "../views/projects/CompletedProjects.vue"
import OnGoingProjects from "../views/projects/OnGoingProjects.vue"

const routes = [
  {
    path: '/',
    name: 'AllProjects',
    component: AllProjects
  },
  {
    path: '/newProject',
    name: 'CreateProject',
    component: CreateProject
   
  },
  {
    path: '/completed',
    name: 'CompletedProjects',
    component: CompletedProjects
   
  },
  {
    path: '/ongoing',
    name: 'OnGoingProjects',
    component: OnGoingProjects
   
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
