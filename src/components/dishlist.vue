<template>
    <div class='dish'>
		<el-breadcrumb separator-class="el-icon-arrow-right">
        	<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        	<el-breadcrumb-item>菜品列表</el-breadcrumb-item>
        </el-breadcrumb>
		
		<el-tabs type='border-card'>
			<el-tab-pane v-for='(item,i) of dishList' >
				<span slot='label'>
					<el-badge :value='item.dishList.length'>{{item.cname}}</el-badge>
				</span>
				<el-row>
					<el-col v-for='(c,j) of item.dishList' :xz='12' :md='6' :lg='4' :xl='3'>
						{{c.title}}
						<img style='max-width:100%;' :src="require('../assets/img/dish/'+c.imgUrl)" alt="">
					</el-col>
				</el-row>
			</el-tab-pane>
		</el-tabs>
    </div>
</template>

<script>
	export default {
		data(){
			return {
				dishList:[]
			}
		},
		mounted(){
			var url = this.$store.state.globalSettings.apiUrl+'/admin/dish'
			this.axios.get(url).then(res=>{
				this.dishList = res.data
				console.log(res.data)
			})
		}
	}
</script>

<style lang='scss'>
	.dish .el-badge__content.is-fixed{
		top:9px;
		right:2px;
	}
</style>