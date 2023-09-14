<template>
  
  <NavbarFilter @filterChangeEmit="handleFilterEmit"
                :currentProps="current"
                />

  <div v-if="projects.length">
    <!-- <div  v-for="item in projects" :key="item.id"> -->
    <div  v-for="item in filteredProjects" :key="item.id">
      <SingleProject :projectProps="item"
                     @deleteEmit="handleDeleteEmit"
                     @doneEmit="handleDoneEmit"
                     />
      
    </div>
  </div> 
  
</template>

<script>
  import { ProjectsService } from "../service/project.service.js"
  import SingleProject from "./SingleProject.vue"
  import NavbarFilter from "@/components/NavbarFilter.vue"
  export default {
    components: { SingleProject, NavbarFilter },
    data() {
      return {
        projects: [],
        current:"all"

      }
    },
    mounted() {
      // fetch("http://localhost:3000/projects")
      // .then(res=>res.json())
      // .then(data=>this.projects=data)
      // .catch(err=>console.log(err.message))
      ProjectsService.getProjects()
        .then(res => {
          console.log("res.mounted", res);
          this.projects = res.data
        })
        .catch(err => alert(err.message))
    },

    methods: {
      handleDoneEmit(id) {
        let p = this.projects.find(item => item.id === id)
        console.log("p", p);
        p.done = !p.done
      },

      handleFilterEmit(by){
        this.current=by
      },

    },

    computed:{
        filteredProjects(){
          if(this.current === "completed"){
            return this.projects.filter(item=>item.done)
          }else if(this.current === "ongoing"){
            return this.projects.filter(item=>!item.done)
          }else{
            return this.projects
          }
        }
      }

  }
</script>

