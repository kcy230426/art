$(function(){
    const hundred = -100 + "%"
    setInterval(function(){
        $("#right .slidebox").animate({marginLeft:hundred},300,function(){
            $(this).find("li").eq(0).appendTo($(this));
            $(this).css("margin-left",0);
        })
    },3000)
    $("body").on("click",".else button",function(){
        $(".else").removeClass("on");
        $(".else").addClass("d-none");
    })
})