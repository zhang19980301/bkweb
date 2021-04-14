<template>
  <div id="app">
    <div class="top_main">
      <nav-top></nav-top>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navTop from "./components/navtop" 
export default {
  name: "app",
  components: {
    navTop
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.top_main{
  width: 100%;
  background-color: #131414;
  height: 60px;
}
</style>
