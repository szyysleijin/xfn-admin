<template>
    <div>
       用户: {{this.$store.state.adminName}}
   
        <el-container>
            <el-aside style='width:150px'>左侧边栏</el-aside>
            <el-container>
                <el-header>顶部</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
           
        }
    },
    beforeCreate(){
        if(!this.$store.state.adminName){
            this.$router.push('/login')
        }
    }
}
</script>