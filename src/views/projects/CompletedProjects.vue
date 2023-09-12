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
        <div v-if="item.done === true" @click="handleShowDetail">{{item.name}}{{ item.done }}</div>
        <div v-else>{{ item.done }}</div>
        <div v-if="showDetail">{{ item.detail }}</div>
      </div>
      <section>icons</section>
    </div>
  </div> 
  
</template>

<script>
export default {

  data(){
    return{
      projects:[],
      showDetail:false
    }
  },
  mounted(){
    fetch("http://localhost:3000/projects")
    .then(res=>res.json())
    .then(data=>this.projects=data)
    .catch(err=>console.log(err.message))
  },
  methods:{
    handleShowDetail(){
      this.showDetail=!this.showDetail
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
</style>