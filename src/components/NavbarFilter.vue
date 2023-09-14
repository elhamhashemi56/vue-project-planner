<template>
  <nav class="navbarFilter">
    <button @click="updateFilter('all')" :class="{active:currentProps === 'all'}">VIEW ALL</button>
    <button @click="updateFilter('completed')" :class="{active:currentProps === 'completed'}">COMPLETED</button>
    <button @click="updateFilter('ongoing')" :class="{active:currentProps === 'ongoing'}">ONGOING</button>
  </nav>
 
</template>

<script>
    export default {
        props:["currentProps"],
        methods:{
            updateFilter(by){
                this.$emit('filterChangeEmit',by)
            } 
        }
        
    }
</script>

<style>
.navbarFilter{
    text-align: start;
    max-width:43%;
    margin: 10px auto;
}
.navbarFilter button{
   border: none;
  color: #8d8c8c;
   cursor: pointer;
}
.navbarFilter button:hover{
  
   cursor: pointer;
}

.active{
    color: rgb(64, 63, 63);
    font-weight: bold;
}
</style>