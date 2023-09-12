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
        <div @click="handleShowDetail">{{item.name}}-{{item.id}}</div>
        <div v-if="showDetail">{{ item.detail }}</div>
      </div>
      
      <section>
        <router-link :to="{name:'EditProject',params:{id:item.id}}"> 
          <img class="iconsKlass" @click="handleEdit" src="../../assets/icons/edit.svg" />
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
    },

    handleEdit(){
      this.editMode=!this.editMode
    },
    handleDone(id){
      console.log(id);
      const projectDone=this.projects.find(item=>item.id === id)
      console.log(projectDone);
      // projectDone.done = !projectDone.done
      const body={
        done:!projectDone.done
      }
      ProjectsService.updateProjectDone(id,body)
      .then(res=>{
          console.log(res.data);
      })
      .catch(err=>err.message)
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
  cursor: pointer;
  
}
</style>