<template>
  <div class="mainNavbar">
    <Navbar />  
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  export default{
    components:{Navbar}
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mainNavbar{
  margin: 10px 0;
}

nav{
  padding: 10px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body{
  background: #efefef;
}
</style>
