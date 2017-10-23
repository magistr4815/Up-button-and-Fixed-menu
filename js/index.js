$(function() {
  var a = $(window).scrollTop();
  
  $(window).on("scroll", function(){
    var pos = $(window).scrollTop();
    if( pos > 600)
      {
        $("#up").fadeIn(600);
      }
    else
      {
        $("#up").fadeOut(600);
      }
    
      if (a < pos)
      {
        $("ul").fadeOut(500);
        a = pos;
      }
      else 
      {
        $("ul").fadeIn(500);
        a = pos;
      }
    

    
        

    
      
      
   
    
    
  })
  
  
  $("#up").on("click", function(){
    $("html,body").animate({scrollTop:0},200);
  });
  
});