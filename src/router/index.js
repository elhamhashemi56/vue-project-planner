import { createRouter, createWebHistory } from 'vue-router'
import AllProjects from "../views/projects/AllProjects.vue"
import CreateProject from "../views/CreateProject.vue"
import EditProject from "../views/projects/EditProject.vue"


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
    path: '/editProject/:id',
    name: 'EditProject',
    component: EditProject
   
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
