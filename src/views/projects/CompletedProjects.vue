<template>
    <nav>
    <router-link to="/">VIEW ALL</router-link> |
    <router-link :to="{name:'CompletedProjects'}">COMPLETED</router-link> |
    <router-link :to="{name:'OnGoingProjects'}">ONGOING</router-link>
  </nav>
  <h1>Completed Projects</h1>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style>

</style>