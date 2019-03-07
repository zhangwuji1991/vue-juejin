<template>
  <div class="timeline">
  	<Navlist :loginstate="login"/>
    <Navlist :loginstate="!login"/>
  	timeline
  </div>
</template>

<script>
	
import Navlist from '@/base/navlist/navlist'
export default {
  name: 'navlist',
  data () {
    return {
      login: true
    }
  },
  components:{
  	Navlist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="scoped">
  .timeline{
    margin-top: 30px;
  }
</style>

