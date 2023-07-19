$(function(){
 
  setInterval(function(){
   
    $(".ani").animate({"marginLeft" : -1200 }, 400, function(){
      $(this).find('div').eq(0).appendTo($(this))
      $(this).css('margin-left',0)

    })
  },3000);
})