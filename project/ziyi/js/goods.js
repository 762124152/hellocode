;(function(){
    class Goods{
        constructor(){
            this.load();//ajax渲染函数
        }
        //根据id值渲染页面
        load(){
            $.ajax({
                url:"http://localhost/project/ziyi/data/list.json",
                success(res){
                    this.id=localStorage.getItem("Id");
                    
                    for(var i=0; i<res.length;i++){

                        this.n=this.id.slice(1,6);
                        if(res[i].goodsId==this.n){
                           this.str=`<a href="project/ziyi/home.html">首页</a>
                           <span>&gt;</span>
                           <i>${res[i].introduce}</i>
                            </div>
                            <div class="goods-main">
                            <div class="main-l">
                                <div class="loupe"></div>
                                <div class="bigObj">
                                    <img src="${res[i].goodsImg}" class="bigImg"/>
                                </div>
                                    <img src="${res[i].goodsImg}" class="smallObj"/>
                                <span>${res[i].goodsId}</span>
                            </div>
                            <div class="main-c">
                               <h5>${res[i].introduce}</h5>
                               <div class="c-price">
                                   <i>售价：</i>
                                   <b>￥${res[i].goodsPrice}.00</b>
                                   <span>包邮</span>
                                   <span>货到付款</span>
                                  
                                </div>
                                <div class="star">
                                   <i>促销：<span>买2减20元</span></i>
                                   <a href="#">★★★★★ 95.56%</a>
                                   <form>
                                       <span>数量：</span>
                                       
                                       <input type="number" name="num" value="1">
                                      
                                    </form>
                                </div>
                                <div class="c-buy">
                                   <a href="#" class="nowBuy">立即购买</a>
                                   <a  class="shoppingCar">加入购物车</a>
                                </div>
                                <p>100%正品 | 低价保障 | 7天无忧退货 | 专业营养师</p>
                            </div>
                            <div class="main-r">
                               <img src="./imgaes/main/dianpu.jpg"/>
                               <a href="#" class="dian">紫一店铺</a>
                               <a href="#" class="ruDian">进入店铺</a>
                               <span class="goodsnum">在售商品115件</span>
                            </div>`;
                         
                            this.jsXuanRan = document.getElementsByClassName("goods-title")[0];
                            this.jsXuanRan.innerHTML = this.str
                            this.price=res[i].goodsPrice;
                        }
                      
                    }
                    
                    this.loupeObj=document.getElementsByClassName("loupe")[0];
                    this.smallObj=document.getElementsByClassName("smallObj")[0];
                    this.bigImg=document.getElementsByClassName("bigImg")[0];
                    this.bigObj=document.getElementsByClassName("bigObj")[0];
                
                    this.smallObj.onmousemove=(eve)=>{
                        eve=eve||window.event;
                        this.mouseX=eve.offsetX; //鼠标移动坐标
                        this.mouseY=eve.offsetY;
                        this.loupeObj.style.display="block";
                        this.loupeObj.style.left=this.mouseX-this.loupeObj.offsetWidth/2+"px";
                        this.loupeObj.style.top=this.mouseY-this.loupeObj.offsetHeight/2+"px";
                        //判断放大镜不能出框
                        if(this.loupeObj.offsetTop<=0){ 
                            this.loupeObj.style.top=0;
                        }
                        if(this.loupeObj.offsetLeft<=0){
                             this.loupeObj.style.left=0;
                        }
                        if(this.loupeObj.offsetTop>=(this.smallObj.offsetHeight-this.loupeObj.offsetHeight)) {
                            this.loupeObj.style.top=(this.smallObj.offsetHeight-this.loupeObj.offsetHeight)+"px"
                        };
                        if(this.loupeObj.offsetLeft>=(this.smallObj.offsetWidth-this.loupeObj.offsetWidth)) {
                            this.loupeObj.style.left=(this.smallObj.offsetWidth-this.loupeObj.offsetWidth)+"px"
                        };  

                        this.bigObj.style.display="block";
                        this.bigImg.style.left=(-(this.loupeObj.offsetLeft/(this.smallObj.offsetWidth-this.loupeObj.offsetWidth))*(this.bigImg.offsetWidth-this.bigObj.offsetWidth))+"px";
                        this.bigImg.style.top=(-(this.loupeObj.offsetTop/(this.smallObj.offsetHeight-this.loupeObj.offsetHeight))*(this.bigImg.offsetHeight-this.bigObj.offsetHeight))+"px";



                        this.loupeObj.onmouseleave=()=>{
                   
                            this.bigObj.style.display="none";
                            this.loupeObj.style.display="none";
                        }
                        
                       
                    }
                    
                    this.btnObj=document.getElementsByName("num")[0];
                    this.shopObj=document.getElementsByClassName("shoppingCar")[0];
                    this.shopObj.onclick=(eve)=>{
                        console.log(1);
                        eve=eve|| window.event;
                        eve.preventDefault()||eve.returnValue;
                        this.car=localStorage.getItem("car")?JSON.parse(localStorage.getItem("users")) : [];
                        if(this.car.length<1){
                           this.car.push({
                               id:this.id,
                               price:this.price,
                               num:this.btnObj.value
                           })
                       }else{
                           this.state=ture;
                           for(var i=0;i<this.car.length;i++){
                               if(this.car[i].id==this.id){
                                   this.car[i].num+this.btnObj.value;
                                   state=false;
                               }
                           }
                           if(state){
                               this.car.push({
                                    id:this.id,
                                    price:this.price,
                                    num:this.btnObj.value
                               })
                           }
                       }
                       localStorage.setItem("car",JSON.stringify(this.car));
                    }
                }
            })
        }
    }
    new Goods;
})();