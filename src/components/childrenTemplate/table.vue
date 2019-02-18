<template>
	<div class='table'>
		<el-card shadow='hover'>
			<div :style='{background:tableColor(data.status)}' class='table-item'>{{data.tid}}号桌 {{data.status | tablestatus }}</div>
			<el-button type='success' @click.native='tableShowDetail' plain>详情</el-button>
			<el-button type='danger' plain>修改</el-button>
		</el-card>
		
		<!-- 点击弹出框 -->
		<el-dialog  :before-close='close' :title='data.tid+"号详情"' :visible='visible'> 
			<el-tabs @tab-click='makeQRcode' type='border-card'>
					<el-tab-pane label='桌台状态'>
						桌台状态:
						<el-button size='small' type='info'>{{data.status | tablestatus }}</el-button>
					</el-tab-pane>
					<!-- 二维码 -->
					<el-tab-pane  label='桌台二维码'>
						<img :src="qrcodeData" >
					</el-tab-pane>
			</el-tabs>
			
			<div slot='footer'>
				<el-button type='primary' @click.native='visible=false'>确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				visible:false,
				qrcodeData:''
			}
		},
		props:['data'],
		methods:{
			makeQRcode(){
				var qrcode= require('qrcode')
				var canvas = document.getElementById('qrcanvas');
				var tableUrl = this.$store.state.globalSettings.appIrl+'/#/'+this.data.tid;
				qrcode.toDataURL(tableUrl,{
					width:300,
					errorCorrectionLevel:'H'
				},(err,url)=>{
					this.qrcodeData=url
				})
			},
			tableColor(status){
				if(status==1) return '#67c23a';
				else if(status==2) return '#e6a23c';
				else if(status==3) return '#f56c6c';
				else return '#909399';
			},
			tableShowDetail(){
				// console.log(this.data) 当前点击信息
				this.visible=true;
			},
			close(){
				this.visible=false;
			}
		}
	}
</script>

<style lang='scss'>
	.table{
		padding:5px;
		text-align:center;
		
		.table-item{
			margin:0 auto;
			width:85%;
			height:100px;
			line-height: 100px;
			border:1px solid #aaa;
			border-radius:20px;
			margin-bottom:10px;
		}
	}
</style>
