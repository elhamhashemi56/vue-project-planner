<template>
  
  <nav>
    <p @click="handleAllProjects">VIEW ALL</p>
    <p @click="handleCompleted">COMPLETED</p>
    <p @click="handleOnGoing">ONGOING</p>
  </nav>
 

  <div v-if="projects.length">
    <div class="projects_Container" v-for="item in projects" :key="item.id">
      <div>
        <div @click="handleShowDetail">{{item.name}}--{{item.id}}--{{item.done}}</div>
        <div v-if="showDetail">{{ item.detail }}</div>
      </div>
      
      <section>
        <router-link :to="{name:'EditProject',params:{id:item.id}}"> 
          <img class="iconsKlass" src="../../assets/icons/edit.svg" />
        </router-link>
        <img class="iconsKlass" @click="handleDelete(item.id)" src="../../assets/icons/delete.svg" />
        <img class="iconsKlass" @click="handleDone(item.id)" src="../../assets/icons/done.svg" />
      </section>
    </div>
  </div> 
  
</template>

<script>
import {ProjectsService} from "../../service/project.service.js"
export default {

  data(){
    return{
      projects:[],
      showDetail:false,
      
    }
  },
  mounted(){
    // fetch("http://localhost:3000/projects")
    // .then(res=>res.json())
    // .then(data=>this.projects=data)
    // .catch(err=>console.log(err.message))
    ProjectsService.getProjects()
    .then(res=>{
      console.log("res.mounted",res);
      this.projects = res.data
    })
    .catch(err=>alert(err.message))
  },

  methods: {

    getData(){
      ProjectsService.getProjects()
        .then(res => {
          console.log("res", res);
          this.projects = res.data
        })
        .catch(err => alert(err.message))
    },

    handleShowDetail() {
      this.showDetail = !this.showDetail
    },

    handleDelete(id) {
      ProjectsService.deleteProject(id)
      .then(res=>this.getData())
      .catch(err => alert(err.message))
    },

    handleDone(id) {
      console.log(id);
      const projectDone = this.projects.find(item => item.id === id)
      console.log(projectDone);
      // projectDone.done = !projectDone.done
      const body = {
        done: !projectDone.done
      }
      ProjectsService.updateProjectDone(id, body)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => err.message)
    },

    handleAllProjects() {
      this.getData()
    },

    handleCompleted() {
      this.projects = this.projects.filter(item => item.done === true)
    },

    handleOnGoing() {
      this.projects = this.projects.filter(item => item.done === false)
    }
  },
  

}
</script>

<style>
.projects_Container{
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  max-width: 60%;
  margin: 10px auto;
  background-color: aliceblue;
  padding: 20px;
  
}

.iconsKlass{
  padding: 3px;
  cursor: pointer;
  
}
</style>