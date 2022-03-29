<template>
    <Logo/>
  <router-view/>
</template>
  
<script>
import Logo from "./components/Logo.vue";
export default {
  name: 'App',
  components: {
    Logo
  }
}

</script>
<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: white;
  color: #19408f;
  padding: 25px;
}
/*
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
