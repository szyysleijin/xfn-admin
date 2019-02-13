<template>
    <div class='categoryList'>
		<el-breadcrumb separator-class="el-icon-arrow-right">
        	<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        	<el-breadcrumb-item>菜品列表管理</el-breadcrumb-item>
			<el-breadcrumb-item>类别列表</el-breadcrumb-item>
        </el-breadcrumb>
		
		<el-button type='primary' @click.native='add'>添加菜品</el-button>
		
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
				console.log(this.categoryList)
			}).catch(err=>{
				console.log(err)
			})
		},
		methods:{
			updateCategory(r,i){
				console.log(r,i)
			},
			deleteCategory(r,i){
				console.log(index)
			}
		}
	}
</script>

<style lang='scss'>
	.el-breadcrumb{
		padding-bottom:20px;
	}
</style>