$(function(){
    setInterval(function(){
        $("#slide ul").animate({"marginLeft":-1200},300,function(){
            $(this).find("li").eq(0).appendTo(this)
            $(this).css("margin-left",0)
        })
    },3000)
})