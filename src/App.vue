<template>
  <div id="app">
    <div class="container-fluid">
      <div id="nav">
        <Header/>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style scoped>
#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav:not(div){
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
