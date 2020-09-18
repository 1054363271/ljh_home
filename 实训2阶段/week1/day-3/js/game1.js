$(document).ready(function(){
  var stop = true;
    $(".btnClick").mousedown(function(){
      if(stop){
        $(".stick").animate({"width":"500px",},2500);
      }
    });
    $(".btnClick").mouseup(function(){
      $(".stick").stop();
      stop = false;
      $(".stick").addClass("stickDown");
      moveMan();
    });
    function moveMan(){
      var stickW=$(".stick").width();
      setTimeout(function(){
        $(".man").find("img").attr("src","../images/stick.gif");
        $(".man").find("img").animate({"left":stickW+"px"},1000,function(){
          var well0=$(".well").eq(0).offset().left;
          var well1=$(".well").eq(1).offset().left;
          var wellwidth=$(".well").eq(0).width();
          var res = well1-well0-wellwidth;
          if((stickW>res) && (stickW<well1)){
            $(".man").find("img").attr("src","../images/stick_stand.png").css("left","0px");
            $(".well-box").animate({"left":-well1+"px"},500);
            $(".stick").removeClass("stickDown").width(0);
            var newwell = "<div></div>";
            $("newwell").addClass("well");
            $("newwell").css("left","800px");
            $("newwell").appendTo(".wellbox");
          }
          else{
            $(".man").animate({"bottom":"0px"},1000);
          }
        });
        
      },500);
     
    }
    
});