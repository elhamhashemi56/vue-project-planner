<template>
  <h2>creat new project</h2>
  <form @submit.prevent="handleCreateProject">

    <label>Name:</label>
    <input type="text" v-model="name">

    <label>Detail:</label>
    <input type="text" v-model="detail">

    <button>Create Project</button>
  </form>
  <p>{{ name }}</p>
  <p>{{ detail }}</p>
</template>

<script>
import { ProjectsService } from '@/service/project.service'
export default {

  data(){
    return{
      name:"",
      detail:"",
      done:false,
    }
  },
  methods:{
    handleCreateProject(){

      const newProject={
        name: this.name,
        detail: this.detail,
        done: this.done,
        id:5
      }

      ProjectsService.addProject(newProject)
      .then(res=>{
        alert("project added")
      })
      .catch(err=>alert(err.message))
    }
  }
}
</script>

<style>

</style>