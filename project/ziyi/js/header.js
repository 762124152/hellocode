;(function(){
   class Menu{
      constructor(){
         //一级菜单
         $(".list-all").on("mouseover",function(){
             $(this).parent().next().css("display","block");
         });
         $(".menu-list").on("mouseleave",function(){
            $(this).css("display","none");
        });
         
         // 二级菜单 隐藏设置
         $(".menu-list").children("li").hover(function(){
            $(this).children(".menu-list2").css("display","block");
         },function(){
            $(this).children(".menu-list2").css("display","none")
         })
        
      }
   }
   new Menu();
}
)();