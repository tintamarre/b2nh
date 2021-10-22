<template>
  <Main :title="title"/>

<div class="footer">
  
</div>

</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  data: function() {
return {
    title: "B2NH"
  };
},
 created(){
      document.title = this.company_name;
  }
}
</script>

<style>
body {
  background-color: #fafafa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  margin: 40px 0 0;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #276fb8;
}

.footer {
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  height: 40px;
  color: #2c3e50;
  font-size: 80%;
  background-color: #fafafa;
}

.footer a {
  color: #276fb8;
}


</style>
