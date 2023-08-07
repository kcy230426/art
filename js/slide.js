$(function(){
    setInterval(function(){
        $("#slide .slidebox").animate({marginLeft:-800}, 600 ,function(){
            $(this).find("li").eq(0).appendTo(this);
            $(this).css("margin-left","0");
        })
    },3000)
})

// $(function(){
//     setInterval(function(){
//         $("#slide .slidebox").animate({marginLeft:-800},400,function(){
//             $(this).find("li").eq(0).appendTo(this);
//             $(this).css("margin-left", "0");
//         })},3000)
// })