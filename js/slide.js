$(function(){
    setInterval(function(){
        $("#slide ul").animate({marginLeft:-1200},600,function(){
            $("#slide li").eq(0).appendTo(this)
            $("#slide ul").css("margin-left",0)
        })
    },3000)
})