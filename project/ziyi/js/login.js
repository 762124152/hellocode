;(function(){
    class Login{
        constructor(){
            this.userObj=document.getElementsByName("user")[0];
            this.passObj=document.getElementsByName("pass")[0];
            this.btnObj=document.getElementsByName("denglu")[0];
            this.btn2Obj=document.getElementsByName("zhuce")[0];
            //清空默认this.userObjvalue值
            this.userObj.onfocus=(e)=>{
                e=e||window.event;
                this.userObj.value="";           
            }
            // 给注册按钮绑定注册页面
            this.btn2Obj.onclick=()=>{
                window.location.href="register.html";
            }
            this.btnObj.onclick=()=>{
                this.getLocal()
            }
            
        }
        getLocal(){
            this.users= JSON.parse(localStorage.getItem("users"));
            var state=false;
            var onoff=0;
            for(var i=0;i<this.users.length;i++){
                if(this.users[i].user== this.userObj.value&&this.users[i].pass== this.passObj.value){
                    state=true;
                    onoff=true;
                    window.location.href="home.html";
                    localStorage.setItem("denglu",onoff)

                }
            }
            if(state==false){
                alert("用户名密码错误，请重新输入");
            }

        }
    }
    new Login;
})();