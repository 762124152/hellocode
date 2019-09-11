;
(function () {
    class HomeAjax {
        constructor() {


            $.ajax({
                url: "http://localhost/project/ziyi/data/home2.json",
                success: function (res) {
                    var str = "";
                    for (var i in res) {

                        str += `
                        <p class="main-title">
                            <span>${res[i]["mian-title"]}</span>
                            <a href="#">${res[i]["mian-title"]}</a>
                        </p>
                        <div class="main-part">
                            <div class="part-l">
                                <a href="list.html">
                                    <img src="${res[i]["goods-l"]}" />
                                </a>
                            </div>
                            <div class="part-c">
                                <a href="list.html">
                                    <span>${res[i]["part-c1"]}</span>
                                    <div class="part-r-price"> 
                                        <i>￥${res[i]["c1-price"]}.00</i>
                                        <b> ￥${res[i]["c1-noprice"]}.00</b>
                                    </div>
                                    <img class="part-c-img" src="${res[i]["goods-1"]}" />
                                </a>
                                <a href="list.html">
                                    <span>${res[i]["part-c2"]}</span>
                                    <div class="part-r-price">
                                        <i>￥${res[i]["c2-price"]}.00</i>
                                        <b> ￥${res[i]["c2-noprice"]}.00</b>
                                    </div>
                                    <img class="part-c-img" src="${res[i]["goods-2"]}"/>
                                </a>
                                <a href="list.html">
                                    <span>${res[i]["part-c3"]}</span>
                                    <div class="part-r-price">
                                        <i>￥${res[i]["c3-price"]}.00</i>
                                        <b> ￥${res[i]["c3-noprice"]}.00</b>
                                    </div>
                                    <img class="part-c-img" src="${res[i]["goods-3"]}" />
                                </a>
                                <a href="list.html">
                                    <span>${res[i]["part-c4"]}</span>
                                    <div class="part-r-price">
                                        <i>￥${res[i]["c4-price"]}.90</i>
                                        <b> ￥${res[i]["c4-noprice"]}.00</b>
                                    </div>
                                    <img class="part-c-img" src="${res[i]["goods-4"]}" />
                                </a>
                            </div>
            
                            <div class="part-r">
                                <h6>最近热卖</h6>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="${res[i]["part-r1"]}" />
                                            <div class="part-r-tea">
                                                <b>${res[i]["r1-title1"]}</b>
                                                <div class="part-r-price">
                                                    <i>￥${res[i]["r1-price"]}.00</i>
                                                    <span>${res[i]["r1-comment"]}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="${res[i]["part-r2"]}" />
                                            <div class="part-r-tea">
                                                <b>${res[i]["r2-title1"]}</b>
                                                <div class="part-r-price">
                                                    <i>￥${res[i]["r2-price"]}.00</i>
                                                    <span>${res[i]["r2-comment"]}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="${res[i]["part-r3"]}" />
                                            <div class="part-r-tea">
                                                <b>${res[i]["r3-title1"]}</b>
                                                <div class="part-r-price">
                                                    <i>￥${res[i]["r3-price"]}.00</i>
                                                    <span>${res[i]["r3-comment"]}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="${res[i]["part-r4"]} "/>
                                            <div class="part-r-tea">
                                                <b>${res[i]["r4-title1"]}</b>
                                                <div class="part-r-price">
                                                    <i>￥${res[i]["r4-price"]}.00</i>
                                                    <span>${res[i]["r4-comment"]}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`;
                
                    }
                    this.jsXuanRan = document.getElementById("jsXuanRan");
                    this.jsXuanRan.innerHTML = str
                }
            })

            this.a=JSON.parse(localStorage.getItem("status"));
            console.log(this.a);
            this.a1=document.getElementsByClassName("topRightA")[0];
            this.a2=document.getElementsByClassName("topRightA2")[0];
            if(this.a=true){
                this.a1.style.display="inline-block";
                this.a2.style.display="none";
            }else{
                this.a1.style.display="inline-block";
                this.a2.style.display="inline-block";
            }
            

        }
    }

    new HomeAjax;
})();