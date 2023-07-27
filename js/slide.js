$(function(){
    setInterval(
        $("slide-box").animate({"marginLeft":-1320},400, function(){
            $(this).find("li").eq(0).appendTo(this)
            $(this).css("margin-Left",0)
        }),3000
    )
})