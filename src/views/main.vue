<template>
    <div>
       用户: {{this.$store.state.adminName}}
   
        <el-container>
            <el-aside style='width:150px'>
             <!-- 左侧菜单-->
                <el-menu :default-active="defaultActive" :default-openeds="routerOpen" :unique-opened='true' :router='true'>
                <!--:default-active默认激活项 :default-openeds默认打开项 :unique-opened唯一打开 :router index路由跳转-->
                    <el-menu-item index='/settings'>
                        <i class='el-icon-setting'></i>
                       <span slot='title'>全局设置</span>
                    </el-menu-item>

                    <el-submenu index='table'>
                        <template slot='title'>
                            <i class='el-icon-menu'></i>
                            <span>桌台管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/table/list">桌台列表</el-menu-item>
                            <el-menu-item index="/table/add">添加桌台</el-menu-item>
                            <el-menu-item index="/table/delete">删除桌台</el-menu-item>
                        </el-menu-item-group>    
                    </el-submenu>

                    <el-menu-item index='/category/list'>
                        <i class='el-icon-message'></i>
                       <span slot='title'>菜品类别</span>
                    </el-menu-item>

                    <el-submenu index='dish'>
                        <template slot='title'>
                            <i class='el-icon-tickets'></i>
                            <span>菜品管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/dish/list">所有菜品</el-menu-item>
                            <el-menu-item index="/dish/add">添加菜品</el-menu-item>
                            <el-menu-item index="/dish/delete">删除菜品</el-menu-item>
                            <el-menu-item index="/dish/update">修改菜品</el-menu-item>
                        </el-menu-item-group>    
                    </el-submenu>

                    <el-menu-item index='/order/list'>
                        <i class='el-icon-date'></i>
                       <span slot='title'>订单管理</span>
                    </el-menu-item>

                    <el-menu-item index='/security'>
                        <i class='el-icon-bell'></i>
                       <span slot='title'>安全管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
					<mainHeader></mainHeader>
				</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import mainHeader from './../components/childrenTemplate/mainHeader'
export default {
    data(){
        return {
           
        }
    },
    beforeCreate(){
        if(!this.$store.state.adminName){
            this.$router.push('/login')
        }
    },
	computed: {
		routerOpen() {
			if(this.$route.path.indexOf('/table')==0)
				return ['table']
			else if(this.$route.path.indexOf('/dish')==0)
				return ['dish']
			else	
				return []
		},
		defaultActive() {
			return this.$route.path;
		}
	},
	components:{
		mainHeader
	}
}
</script>

<style lang='scss'>
	.el-submenu .el-menu-item{
		min-width:140px !important;
	}
	
</style>