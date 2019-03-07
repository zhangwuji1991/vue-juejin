<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/base/header/header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>

</style>
