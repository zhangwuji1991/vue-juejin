<template>
  <div class="header">
   	<div class="header-nav">
   		<a href="###" ><img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"></a>
   		<ul>
   			<li>首页</li>
   			<li>动态</li>
   			<li>话题</li>
   			<li>小册</li>
   			<li>活动</li>
   		</ul>
      <el-input class="search" v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
      <el-select class="article" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="news"><i class="el-icon-bell"></i></div>
      <User/>
   	</div>
  </div>
</template>

<script>

import User from '@/base/user/user'
export default {
  name: 'HelloWorld',
  data () {
    return {
      input: '',
      options: [{
          value: '选项1',
          label: '发布沸点'
        }, {
          value: '选项2',
          label: '分享链接'
        }],
      value: '写文章'
    }
  },
  components:{
    User
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="scoped">
	.header{
		background: #FFFFFF;
	  text-align: center;
    .header-nav{
    	max-width: 960px;
     	margin: auto;
   		height: 60px;
      display: flex;
      line-height: 60px;
      cursor: pointer;
      a{
        margin-top: 10px;
        margin-left: 10px;
      }
      ul{
        list-style: none;
        display: flex;
        width: 360px;
        margin-left: 15px;
        justify-content: space-around;
      }
      .search{
        width: 140px;
        margin-left: 60px;
      }
      .article{
        width: 120px;
        margin-left: 20px;
      }
      .news{
        width: 40px;
        margin-left: 20px;
        .el-icon-bell{
          width: 40px;
          height: 40px;
        }
      }
	  }
	}
</style>
