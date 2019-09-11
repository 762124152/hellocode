;
(function () {
    class Car {
        constructor() {

            this.tbody = document.querySelector("tbody");
            this.changeNum=document.querySelector("changeNum")
            this.addObj=document.getElementById("add");
            this.load();
            this.addEvent();
        }
        load() {
            var that = this;
            $.ajax({
                url: "http://localhost/project/ziyi/data/list.json",
                success: function (res) {
                    that.res = res;
                    that.getlocal();
                }
            });
        }
        获取数值
        getlocal() {
            this.car = localStorage.getItem("car") ? JSON.parse(localStorage.getItem("car")) : [];
            
            this.display();
        }
        渲染页面
        display() {
            var str = "";
            for (var i = 0; i < this.res.length; i++) {
                for (var j = 0; j < this.car.length; j++) {
                    this.carId = this.car[j].id
                    this.carNum = parseInt(this.car[j].num)
                    if (this.res[i].goodsId == this.carId) {
                        str += `<tr index = "${this.res[i].goodsId}">
                        <td><label for="chk"><input type="checkbox" id="chk" checked/></td>
                        <td><img src="${this.res[i].goodsImg}" alt=""></td>
                                <td>${this.res[i].introduce}</td>
                                <td class="jiage">${this.res[i].goodsPrice}</td>
                                <td><input type="number" value="${this.carNum}" min=1 class="changeNum"></td>
                                <td class="zongjia">${this.carNum*parseFloat(this.res[i].goodsPrice)}</td>
                                <td class="del">删除</td>
                            </tr>`
                    }
                }
            }
            this.tbody.innerHTML = str;
           
        }
        addEvent() {
            //点击删除按钮事件
            this.tbody.onclick =(eve)=> {
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if (target.className == "del") {
                    this.id = event.target.parentNode.getAttribute("index");
                    event.target.parentNode.remove();
                    this.setLocal((i)=>{
                        
                        this.car.splice(i,1);
                    })
                };
            }
            //切换数字按钮
            this.tbody.oninput=(eve)=>{
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "changeNum"){
                    this.val=target.value;
                    this.id = target.parentNode.parentNode.getAttribute("index");
                    this.setLocal((i)=>{
                        this.car[i].num = this.val;
                        this.display();
                    })
                }
            }
            this.addObj.onclick()



        }
        setLocal(fn){
            for(var i=0;i<this.car.length;i++){
                if(this.car[i].id == this.id){
                    
                    fn(i);
                }
            }
            localStorage.setItem("car",JSON.stringify(this.car));
        }

    }
    new Car;
})();