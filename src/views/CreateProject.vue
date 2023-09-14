<template>
  <h2>creat new project</h2>
  <form @submit.prevent="handleCreateProject" class="formKlass">

    <div class="formFields">
      <label>Name:</label>
      <input type="text" required v-model="name">
    </div>
    
    <div class="formFields">
      <label>Detail:</label>
      <input type="text" required v-model="detail">
    </div>
    

    <button class="buttonForm">Create Project</button>
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
      }

      ProjectsService.addProject(newProject)
      .then(()=>this.$router.push({name:"AllProjects"}))
      .catch(err=>alert(err.message))
    }
  }
}
</script>

<style>
.formKlass {
 
  border-radius: 10px;
  margin:  10px auto;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.formFields{
  padding: 10px;
  
}

.buttonForm{
  max-width: max-content;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  background-color: blue;
  color: white;
  border: none;
  margin: 5px;
}
</style>