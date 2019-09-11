;(function(){
    class List{
        constructor(){
            this.listBox=document.getElementsByClassName("listBox")[0];
            this.load();
           this.fenye();
           this.addevent();
        }
       load(){
        $.ajax({
            url:"http://localhost/project/ziyi/data/list.json",
            
            success:function(res){
                var str=""
               
                this.listBox = document.getElementsByClassName("listBox")[0];
                for(var i=0;i<res.length;i++){
                    str+=`<a href="goods.html" class="aBox" goodsId="${res[i].goodsId}">
                    
                            <img src="${res[i].goodsImg}" class="goodsImg"/>
                       
                            <i>￥${res[i].goodsPrice}.00</i>
                            <b>${res[i].postAge}</b>
                        
                            <p>${res[i].introduce}</p>
                       
                        <div class="threeLi">
                            <span>${res[i].evaluate}</span>
                            <em>${res[i].per}%好评</em>
                        </div>
                   
                </a>`;
                
                }
                this.listBox.innerHTML = str;
            }
        })
       }

        fenye(){
            $("#myPage").sPage({
                page:1,//当前页码，必填
                total:10,//数据总条数，必填
                pageSize:8,//每页显示多少条数据，默认10条
                totalTxt:"共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
                showTotal:false,//是否显示总条数，默认关闭：false
                showSkip:true,//是否显示跳页，默认关闭：false
                showPN:true,//是否显示上下翻页，默认开启：true
               prevPage:"上一页",//上翻页文字描述，默认“上一页”
                nextPage:"下一页",//下翻页文字描述，默认“下一页”
               backFun:function(page){
                    //点击分页按钮回调函数，返回当前页码
                    console.log(page);
                }
            });
        }

        addevent(){
            this.listBox.addEventListener("click",(e)=>{
                var e=e||window.event;
                var targrt=e.target||e.srcElement;
                this.id=targrt.parentNode.getAttribute("goodsId");
             
                localStorage.setItem("Id",JSON.stringify(this.id));
            })
        }
        
    }
    new List();
})();