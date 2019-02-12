<template>
    <div class='login'>
        <el-card class='login-card'>
            <div slot='header'>管理员登录</div>
            <div> 
                <el-form label-width='90px'>
                    <el-form-item label='管理员 :'> 
                        <el-input v-model='form.aname'></el-input>
                    </el-form-item>  

                    <el-form-item label='密码 :'> 
                        <el-input type='password' v-model='form.apwd'></el-input>
                    </el-form-item>  

                    <el-form-item>
                        <el-button @click.native='doLogin' type='primary'>登录</el-button>
                        <el-button @click.native='doCancel' >取消</el-button>
                    </el-form-item> 
                </el-form>
            </div>
        </el-card>   
        {{this.$store.state.globalSettings}}       
    </div>
</template>

<script>
export default {    
    data(){
        return {
            form:{
                aname:'admin',
                apwd:'123456'
            }
        }
    },
    methods:{
        doLogin(){
            var url = this.$store.state.globalSettings.apiUrl+`/admin/login/${this.form.aname}/${this.form.apwd}`
             this.axios.get(url).then(res=>{
                if(res.data.code==200){
                    this.$store.commit('setAdminName',this.form.aname)
                    this.$router.push('/main')
                }else{
                    this.$alert('用户名密码错误','登录失败',{type:'error'})
                }
             }).catch(err=>{
                 console.log(err)
             })
        },
        doCancel(){
            this.form.name=''
            this.form.pwd=''
        }
    }

}
</script>
<style lang="scss">
    .login-card{
        width:400px;
        margin:100px auto;
        .el-card__header{
            text-align:center;
        }
        .el-form-item{
           
        }
    }
</style>

