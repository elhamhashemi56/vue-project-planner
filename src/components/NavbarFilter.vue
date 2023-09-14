<template>
  <nav class="navbarFilter">
    <button>VIEW ALL</button>
    <button>COMPLETED</button>
    <button>ONGOING</button>
  </nav>
 
</template>

<script>
export default {

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
   color: darkgray;
   cursor: pointer;
}
.navbarFilter button:hover{
   color: gray;
   cursor: pointer;
}
</style>