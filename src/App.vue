<template>
  <div id="app">
      <ToDo/>
  </div>
</template>

<script>

// 1.引入组件
import ToDo from './components/ToDo';
export default {
  data(){
    return{
     
    }
  },


  name: 'App',
  //2.映射组件标签
  components: {
    ToDo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
