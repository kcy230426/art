$(function(){
    setInterval(function(){
        const hundred = -100 + "%"
        $("#slide .slidebox").animate({marginLeft:hundred}, 400, function(){
            $(this).find("li").eq(0).appendTo($(this));
            $(this).css("margin-Left", 0)
        })
    },3000)
    $("body").on("click","#commu .ntitle",function(){
        $(".title .ntitle").addClass("on").siblings().removeClass("on")
        $("#commu #notice").removeClass("d-none");
        $("#commu #notice").addClass("on").siblings().removeClass("on");
        $("#commu #gallery").addClass("d-none");
    })
    $("body").on("click","#commu .gtitle",function(){
        $(".title .gtitle").addClass("on").siblings().removeClass("on")
        $("#commu #gallery").addClass("on").siblings().removeClass("on");
    })
})