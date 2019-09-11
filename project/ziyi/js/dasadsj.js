h5-1907-张沐阳 15:12:36
      //从json中获取数据并且渲染到页面中的实现--------------------
        class  Page{
            constructor(obj){
                this.url=obj.url;
                this.list=obj.list;
                this.pagebox=obj.pagebox;
                this.num=obj.num;//默认页面显示的几个
                this.index=obj.index;//默认当前的索引值
                this.load();//加载数据
            }
            load(){//使用jq的封装好的ajax方法
             var that=this;
                $.ajax({
                    url:this.url,
                    success:function(res){
                        //注意使用jq的ajax方法他已经自动把res转换为对象了
                          that.res=res;
                        console.log(res);
                      that.createPage();//创建页码
                    }
                })
            }
     
            createPage(){
                var that=this;
                  this.pagebox.pagination(this.res.length,{
                      items_per_page:this.num,//每页显示的条目数
                      current_page:this.index,
                      callback:function(a){//回调函数,,插件特性，这个参数a就是当前条目数的下标索引
                         that.index=a;//更新当前点击的索引，为了显示默认索引的位置在哪里
                         that.display();//根据是第一页（索引）来去分配到页面的图片（渲染）//这样写每次点击一下都会进行渲染  
                       
                      }
     
                  });
            }
          
            display(){
                console.log(this.res);//拿到数据了,下面要进行渲染数据
                // console.log(this.index);
             var str="";
             for(var i=this.index*this.num;i<this.index*this.num+this.num;i++){
                 if(i<this.res.length)//如果i的值超出json数据中的总数据，就不进行渲染，要不然会报错的
                 {
    str=str+`<li index=${this.res[i].goodsId} ><div class="a"><img src="${this.res[i].url}"/><p>${this.res[i].tip}</p><span>￥${this.res[i].price}</span>
                <i hhh="zzz">查看详情</i></div></li>`;
                 }
             }
             this.list.html(str);//注意list对象是jq的对象 
             this.aobj=$("#page").children("a") 
             this.addevent();
            }

            addevent(){
                //阻止所有事件的默认行为了
                window.event.returnValue=false;
                var status;
                if(this.index>=0){
                    document.documentElement.scrollTop=400;
                    console.log(66666);
                }else{
                    document.documentElement.scrollTop=0;
                }
                var that=this;
                //采用事件委托机制，为未来添加到每一个的商品的按钮绑定事件，委托给其父元素
                 (this.list)[0].addEventListener("click",function (eve){
                     var e=eve||window.event;
                     var tgt=e.target||e.srcElement;
                      console.log(tgt)
                     //提前找到点击该商品的唯一的id号
                     if(tgt.getAttribute("hhh")=="zzz"){
                        that.index2=tgt.parentNode.parentNode.getAttribute("index");
                        //  console.log(that.index2);
                         //找到之后，准备存储
                         that.setGoods();
                     }      
                 })
                
            }
            setGoods(){
                //阻止事件a链接的默认行为
                window.event.returnValue=false;
                console.log(this.index2)
                //存储每个商品对应的id值
                this.onlyId=(localStorage.setItem("onlyId",JSON.stringify(this.index2)));
                location.href="xiangqing.html";
            }
        }
           new Page({
                url:"http://localhost/shengji/data/goods.json",
                list:$("#imgbox ul"),//获取放图片的父亲元素框
                pagebox:$("#page"),//获取放分页的父亲框
                num:4,//默认一页显示4个,
                index:0,//默认当前索引为0,
         
            })
    