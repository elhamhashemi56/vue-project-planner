<template>
  
  <nav>
    <router-link to="/">VIEW ALL</router-link> |
    <router-link :to="{name:'CompletedProjects'}">COMPLETED</router-link> |
    <router-link :to="{name:'OnGoingProjects'}">ONGOING</router-link>
  </nav>
 
  <router-view/>

  <div v-if="projects.length">
    <div class="projects_Container" v-for="item in projects" :key="item.id">
      <div>
        <div @click="handleShowDetail">{{item.name}}</div>
        <div v-if="showDetail">{{ item.detail }}</div>
      </div>
      <section>
        <img class="iconsKlass" src="../../assets/icons/edit.svg" />
        <img class="iconsKlass" @click="handleDelete(item.id)" src="../../assets/icons/delete.svg" />
        <img class="iconsKlass" src="../../assets/icons/done.svg" />
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
      showDetail:false
    }
  },
  mounted(){
    // fetch("http://localhost:3000/projects")
    // .then(res=>res.json())
    // .then(data=>this.projects=data)
    // .catch(err=>console.log(err.message))
    ProjectsService.getProjects()
    .then(res=>{
      console.log("res",res);
      this.projects = res.data
    })
    .catch(err=>alert(err.message))
  },

  methods:{
    handleShowDetail(){
      this.showDetail=!this.showDetail
    },

    handleDelete(id){
      ProjectsService.deleteProject(id)
      .then(res=>{
        alert("project deleted")
      })
      .catch(err=>alert(err.message))
    }
  }

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
  
}
</style>