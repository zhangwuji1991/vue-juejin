<template>
  <div class="user">
   	<div class="" v-show="!loging">
      <ul>
        <li>登录</li>
        <li>注册</li>
      </ul>
    </div>
    <div class="userimg" v-show="loging">
      头像
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      loging: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="scoped">
	.user{
		/*margin-left: 40px;*/
    ul{
      
      width: 100px;
      list-style: none;
      display: flex;
      justify-content: space-around;
    }
    .userimg{
      width: 100px;
      text-align: center;
    }
	}
</style>
