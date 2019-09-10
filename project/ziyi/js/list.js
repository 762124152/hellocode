;(function(){
    class List{
        constructor(){
            
            $.ajax({
                url:"http://localhost/project/ziyi/data/list.json",
                
                success:function(res){
                    var str=""
                   
                    this.listBox = document.getElementsByClassName("listBox")[0];
                    for(var i=0;i<res.length;i++){
                        str+=`<a href="goods.html">
                        <ul>
                            <li>
                                <img src="${res[i].goodsImg}"/>
                            </li>
                            <li>
                                <i>￥${res[i].goodsPrice}.00</i>
                                <b>${res[i].postAge}</b>
                            </li>
                            <li>
                                <p>${res[i].introduce}</p>
                            </li>
                            <li class="threeLi">
                                <span>${res[i].evaluate}</span>
                                <em>${res[i].per}%好评</em>
                            </li>
                        </ul>
                    </a>`;
                    
                    }
                    this.listBox.innerHTML = str;
                   
                    
                   
                    
                }
            })
            
            
            $("#myPage").sPage({
                page:1,//当前页码，必填
                total:55,//数据总条数，必填
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
       
        
    }
    new List();
})();