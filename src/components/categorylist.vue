<template>
    <div class='categoryList'>
		<el-breadcrumb separator-class="el-icon-arrow-right">
        	<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        	<el-breadcrumb-item>菜品列表管理</el-breadcrumb-item>
			<el-breadcrumb-item>类别列表</el-breadcrumb-item>
        </el-breadcrumb>
		
		<el-button type='primary' @click.native='addCategory'>添加菜品</el-button>
		
		<el-table :data='categoryList' border>
			<!-- stripe 条状  border 边框-->
			<el-table-column label='编号' prop='cid'></el-table-column>
			<el-table-column label='名称' prop='cname'></el-table-column>
			<el-table-column label='操作' >
				<template slot-scope='{row,$index}'>
					<el-button @click.native='updateCategory(row,$index)' type='success'>修改{{$index}}</el-button>
					<el-button @click.native='deleteCategory(row,$index)' type='error'>删除</el-button>
				</template>
			</el-table-column>
		</el-table>
    </div>
</template>

<script>
	export default {
		data(){
			return {
				categoryList:[]
			}
		},
		mounted(){
			var url = this.$store.state.globalSettings.apiUrl+`/admin/category`;
			this.axios.get(url).then(res=>{
				this.categoryList=res.data
			}).catch(err=>{
				console.log(err)
			})
		},
		methods:{
			addCategory(){
				console.log()
				this.$prompt('输入添加的类别','提示',{
					type:'info'
				}).then((result)=>{
					var url = this.$store.state.globalSettings.apiUrl+'/admin/category'
					this.axios.post(url,{cname:result.value}).then(res=>{
						if(res.data.code==200){
							this.$message.success('添加成功')
							this.categoryList.push({
								cid:res.data.cid,
								cname:result.value
							})
						}else{
							this.$message.error('添加失败')
						}
					}).catch(err=>{
						console.log(err)
					})
				}).catch(err=>{})
			},
			updateCategory(r,i){
				this.$prompt('修改类名','提示',{
					inputValue:r.cname
				}).then(result=>{
					// console.log(result)
					var url = this.$store.state.globalSettings.apiUrl+'/admin/category/'
					this.axios.put(url,{cid:r.cid,cname:result.value}).then(res=>{
						// console.log(res.data)
						if(res.data.code==200){
							this.$message.success('修改成功')
							this.categoryList.splice(i,1,{cid:r.cid,cname:result.value})
						}else{
							this.$message.error('删除失败')
						}
					})
				}).catch(err=>{})
			},
			deleteCategory(r,i){
				this.$confirm('请确认是否删除','警告',{
					type:'warning',
				}).then(()=>{
					var url = this.$store.state.globalSettings.apiUrl+'/admin/category/'+r.cid;
					this.axios.delete(url).then(res=>{
						if(res.data.code==200){
							this.categoryList.splice(i,1) //删除模型数据当前行
							this.$message.success('删除成功')
						}else{
							this.$message.error('删除失败')
						}
					}).catch(err=>{
						console.log(err)
					})
				}).catch(err=>{})
			}
		}
	}
</script>

<style lang='scss'>
	.el-breadcrumb{
		padding-bottom:20px;
	}
</style>