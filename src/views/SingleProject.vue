<template>
    <div class="project_Container" :class="{leftBorder:projectProps.done}">
      <div>
        <div @click="handleShowDetail">{{projectProps.name}}--{{projectProps.id}}--{{projectProps.done}}</div>
        <div v-if="showDetail">{{ projectProps.detail }}</div>
      </div>
      
      <section>
        <router-link :to="{name:'EditProject',params:{id:projectProps.id}}"> 
          <img class="iconsKlass" src="../assets/icons/edit.svg" />
        </router-link>
        <img class="iconsKlass" @click="handleDelete(projectProps.id)" src="../assets/icons/delete.svg" />
        <img class="iconsKlass" @click="handleDone(projectProps.id)" src="../assets/icons/done.svg" />
      </section>
    </div>
 
</template>

<script>
import { ProjectsService } from '../service/project.service.js'
export default {
    props:["projectProps"],
    data(){
        return{
            showDetail:false
        }
    },
    methods:{
       
        handleShowDetail() {
            this.showDetail = !this.showDetail
        },

        handleDelete(id) {
            ProjectsService.deleteProject(id)
            .then(()=>this.$emit("deleteEmit",id))
            .catch(err => alert(err.message))
        },

        handleDone(id){
            console.log("this.projectProps.done",this.projectProps.done);
            const body = {
                done: !this.projectProps.done
            }
            ProjectsService.updateProjectDone(id, body)
                .then(()=>this.$emit("doneEmit",id))
                .catch(err => err.message)
        }

    }
}


</script>

<style>
.project_Container{
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  max-width: 40%;
  margin: 10px auto;
  background-color: white;
  padding: 20px;
  border-left: 5px solid rgba(215, 11, 62, 0.827);
  
}
.iconsKlass{
  padding: 3px;
  cursor: pointer;
  
}
.leftBorder{
  border-left: 5px solid rgba(6, 132, 117, 0.827);
}
</style>