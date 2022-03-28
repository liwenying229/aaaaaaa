<template>
  <div id="app">
      <h3>hello</h3>
     <router-link to="/home"> home </router-link>
     <router-link to="/news"> news </router-link>
        <!-- 取代a的组件 router-link -->
     <router-view> </router-view>
        <!-- 路由的出口组件 -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {

  },
  created(){
    axios.get("/api")
    .then(res=>console.log(res.data))
  }
}
</script>

<style>

</style>
