<template>

  <Indecision/>

  <!-- <Counter title="Entraron" :start="105 + 5"/>

  <Counter title="Salieron" /> -->
</template>

<script>
// import Counter from '@/components/Counter'
import Indecision from './components/Indecision.vue'


export default {
  name: 'App',
  components:{
    // Counter,
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 