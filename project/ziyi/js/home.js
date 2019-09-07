;(function(){
    class HomeAjax{
        constructor(){
           
            $.ajax({
                url:"http://localhost/project/ziyi/data/home.json",
                success:function(res){
                    console.log(typeof res)
                   

                }
            })

        }
    }

    new HomeAjax;
})();