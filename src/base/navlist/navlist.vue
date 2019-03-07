<template>
  <div class="navlist">
    <div v-show="!loginstate" class="hottext">热门文章</div>
  	<ul >
  		<li v-for="list in navlists">{{list.text}}</li>
  	</ul>
    <div class="bqgl" v-show="loginstate">标签管理</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      navlists:[
  			{
  				text: '推荐',
  				path: './'
  			},
  			{
  				text: '关注',
  				path: './'
  			},
  			{
  				text: 'Android',
  				path: './'
  			},
  			{
  				text: '前端',
  				path: './'
  			},
  			{
  				text: 'ios',
  				path: './'
  			},
  			{
  				text: '后端',
  				path: './'
  			},
  			{
  				text: '设计',
  				path: './'
  			},
  			{
  				text: '产品',
  				path: './'
  			},
  			{
  				text: '工具资源',
  				path: './'
  			},
  			{
  				text: '阅读',
  				path: './'
  			},
  			{
  				text: '人工智能',
  				path: './'
  			},
  			{
  				text: '运维',
  				path: './'
  			}
  		]
    }
  },
  props: {
    loginstate: {
      type: Boolean,
      default: false
    }
  },
  created() {
  },
  methods:{
  	navlist() {
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="scoped">
	.navlist{
		max-width: 960px;
		margin: auto;
    display: flex;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    background: #FFFFFF;
    .hottext{
      margin-right: 130px;
    }
		ul{
			width: 760px;
			list-style: none;
      display: flex;
      justify-content: space-between;
      
		}
    .bqgl{
      margin-left: 130px;
    }
	}
</style>

