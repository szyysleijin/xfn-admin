<template>
	<div class='mianHeader'>
		<h3 class='title'>{{this.$store.state.globalSettings.appName}}</h3>
		<div class='right'>
			用户: {{this.$store.state.adminName}} 
			<el-button @click.native='quit'>退出</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				appName:''
			}
		},
		methods:{
			quit(){
				this.$store.commit('setAdminName','')
				this.$router.push('/login')
			}
		},
		watch:{
			
		}
	}
</script>

<style lang='scss'>
	$header-height:60px;
	.mianHeader{
		background:#dcdfe6;
		border-radius:5px;
		line-height:$header-height;
		height:$header-height;
		padding:0 5px;
		.title{
			color:#666;
			float:left;
			margin:0;
		}
		.right{
			float:right;
		}
	}
</style>
