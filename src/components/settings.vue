<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>全局设置</el-breadcrumb-item>
		</el-breadcrumb>
		
		<el-card shadow='never'>
			<!--shadow='never' 取消el-card阴影  -->
			<el-form label-width='100px'>
				<el-form-item label='应用名称: '>
					<el-input v-model='appName'></el-input>
				</el-form-item>
				
				<el-form-item label='数据API地址: '>
					<el-input v-model='apiUrl'></el-input>
				</el-form-item>
				
				<el-form-item label='管理后台地址: '>
					<el-input v-model='adminUrl'></el-input>
				</el-form-item>
				
				<el-form-item label='客户app地址: '>
					<el-input v-model='appUrl'></el-input>
				</el-form-item>
				
				<el-form-item label='ICP备案号: '>
					<el-input v-model='icp'></el-input>
				</el-form-item>
								
				<el-form-item label='版权声明: '>
					<el-input v-model='copyright'></el-input>
				</el-form-item>
				
				<el-form-item >
					<el-button type='primary' @click.native='doSubmit'>提交</el-button>
					<el-button @click.native='doCancel'>恢复-重置</el-button>
				</el-form-item>
			</el-form>
		</el-card>
    </div>
</template>

<script>
	export default {
		data(){
			return {
				appName:'',
				apiUrl:'',
				adminUrl:'',
				appUrl:'',
				icp:'',
				copyright:'',
			}
		},
		mounted(){
			//this.form=this.$store.state.globalSettings  //引用类型, 直接修改store
			this.appName=this.$store.state.globalSettings.appName
			this.apiUrl=this.$store.state.globalSettings.apiUrl
			this.adminUrl=this.$store.state.globalSettings.adminUrl
			this.appUrl=this.$store.state.globalSettings.appUrl
			this.icp=this.$store.state.globalSettings.icp
			this.copyright=this.$store.state.globalSettings.copyright
		},
		methods:{
			doSubmit(){
				var url = this.$store.state.globalSettings.apiUrl+`/admin/settings`;
				var data={
					appName:this.appName,
					apiUrl:this.apiUrl,
					adminUrl:this.adminUrl,
					appUrl:this.appUrl,
					icp:this.icp,
					copyright:this.copyright
				}
				this.axios.put(url,data).then(res=>{
					if(res.data.code==200){
						 this.$message({
						  message: '修改成功',
						  center: true,
						  type:'success',
						  duration:500
						});
						this.$store.commit('setGlobalSettings',data)
					}else{
						 this.$message({
						  message: '修改失败',
						  center: true,
						  type:'error',
						  duration:500
						});
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			doCancel(){
				this.appName=this.$store.state.globalSettings.appName
				this.apiUrl=this.$store.state.globalSettings.apiUrl
				this.adminUrl=this.$store.state.globalSettings.adminUrl
				this.appUrl=this.$store.state.globalSettings.appUrl
				this.icp=this.$store.state.globalSettings.icp
				this.copyright=this.$store.state.globalSettings.copyright
			}
		}
	}
</script>

<style lang='scss'>
	.el-card{
		margin-top:15px;
	}
</style>