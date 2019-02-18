<template>
    <div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
        	<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        	<el-breadcrumb-item>桌台管理</el-breadcrumb-item>
        	<el-breadcrumb-item>桌台列表</el-breadcrumb-item>
        </el-breadcrumb>
		
		<el-row>
			<el-col v-for='(num,i) of tableList' :xs='12' :sm='8' :md='6' :lg='4' :xl='2' >
				<tableList :data='num'></tableList>
			</el-col>
		</el-row>
		
		
    </div>
</template>

<script>
	import tableList from './childrenTemplate/table'
	export default {
		data(){
			return {
				tableList:[]
			}
		},
		components:{
			tableList
		},
		mounted(){
			var url = this.$store.state.globalSettings.apiUrl+'/admin/table'
			this.axios.get(url).then(res=>{
				this.tableList=res.data
			})
		}
	}
</script>