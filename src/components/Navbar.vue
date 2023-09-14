<template>
  <nav>
    <router-link to="/">Projects</router-link> |
    <router-link :to="{name:'CreateProject'}">Add a New Project</router-link>
  </nav>
  <router-view/>
</template>

