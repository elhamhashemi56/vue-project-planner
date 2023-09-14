<template>
  <!-- <h1>project mit id:{{ $route.params.id }}</h1> -->
  <h1>project mit id:{{ id }}</h1>
  <form @submit.prevent="handleUpdateProject(this.id)" class="formKlass">
   
        <div class="formFields">
        <label>Name:</label>
        <input type="text" v-model="name"  >
        </div>
    
        <div class="formFields">
        <label>Detail:</label>
        <input type="text" v-model="detail" >
        </div>
   
    
        <div>
            <button class="buttonForm">Update Project</button>
            <button class="buttonForm" @click="handleCancleUpdate">Cancle</button>
        </div>
    
    </form>
</template>

<script>
import { ProjectsService } from '@/service/project.service'
export default {

    props: ['id'],
    data(){
        return{
           
            name:"",
            detail:""
        }
    },
    
    mounted() {
        // console.log(this.id);
       ProjectsService.getProjectMitId(this.id)
       .then(res=>{
        // this.project=res.data
        // this.name=this.project.name
        // this.detail=this.project.detail
        // console.log(this.project);
        
        this.name=res.data.name
        this.detail=res.data.detail
        console.log(this.project);
       })
       .catch(err=>alert(err.message))
    },
    methods:{
        handleUpdateProject(id){
            const body={
                name:this.name,
                detail:this.detail,
                
            }
            ProjectsService.updateProject(id,body)
            .then(res=>this.$router.push({name:"AllProjects"}))
            .catch(err=>alert(err.message))

        },
        handleCancleUpdate(){
            this.$router.push({name:"AllProjects"})
        }
    }

}
</script>

<style>

</style>