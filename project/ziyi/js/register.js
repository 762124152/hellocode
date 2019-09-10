;(function(){
    class Logon{
        constructor(){

           this.userObj=document.getElementsByName("user")[0];
           this.passObj=document.getElementsByName("pass")[0];
           this.pass2Obj=document.getElementsByName("pass2")[0];
           this.btnObj=document.getElementsByName("denglu")[0];
           this.footer3=document.getElementsByClassName("footer-3")[0];
           
           //表单正则验证
           this.t=false;
           this.t1=false;
           this.t2=false;
           this.t3=false;
           //用户名判断
           this.userObj.onfocus=(e)=>{
               e=e||window.event;
               this.userObj.value="";
               this.userObj.onblur=(eve)=>{
                   eve=eve||window.event;
                   var txt=this.userObj.value;
                   // console.log(txt);
                   var reg= /^[a-z]\w{2,15}$/
                   var time;
                   if(reg.test(txt)){
                       this.userObj.value=txt;
                       this.t1=true;
                   }else{
                       alert("请输入以字母开头至少3位")
                       this.userObj.value="";
                       this.t1=false;
                   }
               }
           }
           // 判断密码正则
           this.passObj.onfocus=(e)=>{
                e=e||window.event;
                this.passObj.value="";
                this.passObj.onblur=(eve)=>{
                    eve=eve||window.event;
                    var txt=this.passObj.value;
                    // console.log(txt);
                    var reg= /^[a-z]\w{2,15}$/
                    var time;
                    if(reg.test(txt)){
                        this.passObj.value=txt;
                        this.t2=true;
                    }else{
                        alert("请输入以字母开头至少3位")
                        this.passObj.value="";
                        this.t2=false;
                    }
                }
            }
            // 判断两次密码是否一致
            this.pass2Obj.onfocus=(e)=>{
               
                e=e||window.event;
                this.pass2Obj.value="";
                this.pass2Obj.onblur=(eve)=>{
                    eve=eve||window.event;
                    if(this.passObj.value==this.pass2Obj.value){
                        this.pass2Obj.value=this.pass2Obj.value;
                        this.t3=true;
                    }else{
                        alert("两次密码不一致");
                        this.pass2Obj.value="";
                        this.t3=false;
                    }
                }
            }
            //注册时判断checkbox 和存储loacalstorage
            this.btnObj.onclick=(eve)=>{
                eve=eve|| window.event;
                //判断checkbox是否点击
                if($(".checkbox").is(':checked')==false){
                    alert(" 请同意本网站所由协议")
                    this.t=false
                }else{
                    this.t=true;
                }
                if(this.t==true&&this.t1==true&&this.t2==true&&this.t3==true){
                    //如果成功 储存到loacalstorage
                    this.setLocal();
                    alert("欢迎尊敬的"+this.userObj.value+"客户");
                    window.location.href="login.html"
                } 
            }
        }
        //  储存到loacalstorage的函数
            setLocal(){
                
                this.users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
                
                if(this.users.length < 1){
                   
                    this.users.push({
                        user:this.userObj.value,
                        pass:this.passObj.value
                    })
                    
                }else{
                    var state = true;
                    for(var i=0;i<this.users.length;i++){
                        if(this.users[i].user === this.userObj.value){
                            alert("您已注册过，无需再次注册");
                            window.location.href="login.html";
                            state=false;
                            
                        }
                        console.log(this.userObj.value);
                    }
                    if(state){
                        this.users.push({
                            user:this.userObj.value,
                            pass:this.passObj.value
                        })
                    }
                }
                
                localStorage.setItem("users",JSON.stringify(this.users));
            }
    }
    new Logon();
})();
