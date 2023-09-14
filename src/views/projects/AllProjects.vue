<template>
  
  <nav>
    <p @click="handleAllProjects">VIEW ALL</p>
    <p @click="handleCompleted">COMPLETED</p>
    <p @click="handleOnGoing">ONGOING</p>
  </nav>
 

  <div v-if="projects.length">
    <div  v-for="item in projects" :key="item.id">
      <SingleProject :projectProps="item"
                     @deleteEmit="handleDeleteEmit"
                     @doneEmit="handleDoneEmit"
                     />
      
    </div>
  </div> 
  
</template>

<script>
import {ProjectsService} from "../../service/project.service.js"
import SingleProject from "./SingleProject.vue"
export default {
  components:{SingleProject},
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
    handleDoneEmit(id) {
      let p = this.projects.find(item => item.id === id)
      console.log("p",p);
      p.done = !p.done
    },

    

    handleCompleted() {
      this.projects = this.projects.filter(item => item.done === true)
    },

    handleOnGoing() {
      this.projects = this.projects.filter(item => item.done === false)
    },

    handleDeleteEmit(id){
        this.projects=this.projects.filter(item=>item.id !== id)
    }
  },
  

}
</script>

