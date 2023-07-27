$(function(){
    setInterval(function(){
        $("#slide-box").animate({"marginLeft":-1320},400, function(){
            $(this).find("li").eq(0).appendTo(this)
            $(this).css("margin-Left",0)
        })   
    },3000
    )
})

// $(function(){
 
//     setInterval(function(){
     
//       $("#slide ul").animate({"marginLeft" : -800 }, 400, function(){
//         $(this).find('li').eq(0).appendTo($(this))
//         $(this).css('margin-left',0)
  
//       })
//     },3000);
//   })
  
  