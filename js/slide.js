$(function(){
    setInterval(function(){
        $("#slide .slidebox").animate({marginLeft:"-1200px"}, 500, function(){
            $(this).find("li").eq(0).appendTo(this)
            $(this).css("margin-left", "0")
        })
    },3000)
    $("body").on("click", "#threeTab .title", function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    })
    $("body").on("click", "#threeTab .ntitle", function(){
        $("#threeTab .ulbox .nul").addClass("on");
        $("#threeTab .ulbox .nul").siblings().removeClass("on");
    })
    $("body").on("click", "#threeTab .gtitle", function(){
        $("#threeTab .ulbox .gul").addClass("on");
        $("#threeTab .ulbox .gul").siblings().removeClass("on");
    })
    $("body").on("click",".nul li", function(){
        $(".popup").removeClass("d-none").addClass("d-block")
    })
    $("body").on("click",".gul li", function(){
        $(".gallerypop").removeClass("d-none").addClass("d-block")
    })
    $("body").on("click",".popup button", function(){
        $(".popup").removeClass("d-block").addClass("d-none")
    })
    $("body").on("click",".gallerypop button", function(){
        $(".gallerypop").removeClass("d-block").addClass("d-none")
    })
})