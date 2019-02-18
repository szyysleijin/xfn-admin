<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>菜品列表管理</el-breadcrumb-item>
			<el-breadcrumb-item>菜品添加</el-breadcrumb-item>
		</el-breadcrumb>

		<el-form label-width='100px;'>
			<el-form-item label='添加图片:'>
				<el-upload :show-file-list='false' name='dishImg' :on-success='handleAvatarSuccess' :action='uploadAction' class='upload'>
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: '',
				uploadAction: this.$store.state.globalSettings.apiUrl + '/admin/dish/img',
				form:{
					title:'',
					imgUrl:'',				//图片在服务器上的文件名	
					price:'',
					detail:'',
					categoryId:''
				}
			}
		},
		methods:{
			handleAvatarSuccess(res,file){
				this.imageUrl = URL.createObjectURL(file.raw) //编码dataUrl字符串
				this.form.imgUrl=res.fileName	//图片在服务器上的文件名	
			}
		}
	}
</script>

<style lang='scss'>
	.upload {
		.el-upload {
			border: 1px dashed #aaa;
			border-radius: 3px;
			cursor: pointer;
			width: 250px;
			height: 176px;
			overflow: hidden;
			&:hover {
				border-color: #409eff;
			}
		}
		.avatar-uploader-icon {
			font-size: 28px;
			color: #8c939d;
			width: 178px;
			height: 178px;
			line-height: 178px;
			text-align: center;
		}
		.avatar {
			width: 178px;
			height: 178px;
			display: block;
		}
		img{
			max-width:100%;
		}
	}
</style>
