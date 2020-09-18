$(document).ready(function(){
  // $(".nav-ul>li").mouseover(function(){
  //   $(this).css("background","#444");
  // });
  // $(".nav-ul>li").mouseout(function(){
  //   $(this).css("background","#f00");
  // });
  var num = 0;
  $(window).resize(function(){
    num++;
    console.log(num);
  });
  // $(".nav-ul>li").hover(function(){
  //   $(this).css("background","#444");
  // });
  $(".nav-ul>li").toggle(
    function(){$(".nav-ul>li").css("background-color","yellow")},
    function(){$(".nav-ul>li").css("background-color","green")},
    function(){$(".nav-ul>li").css("background-color","blue")}
  )
  
});