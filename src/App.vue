<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 3.使用组件标签 -->
    <HelloWorld/>

    <div class="container">
      <Add/>
      <List/>

    </div>
  </div>
</template>

<script>
// 1.引入组件
import HelloWorld from './components/HelloWorld'
import Add from './components/add'
import List from './components/list'


export default {
  data(){
    return{
      comments:[
        {
          name:'BOB',
          content:'Vue还不错'
        },
        {
          name:'Ym',
          content:'Vue so easy'
        },
        {
          name:'Marry',
          content:'Vue还可以'
        },

      ]

    }
  },


  name: 'App',
  //2.映射组件标签
  components: {
    HelloWorld,
    Add,
    List
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
