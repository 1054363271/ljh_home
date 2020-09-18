$(document).ready(function(){
  var n = 1;
  var a = 1;
  var times = setInterval(function(){
    if(n==3){
      n=1;
      $(".slide_box").css("margin-top",'-401'*n+"px");
    }else{
      $(".slide_box").css("margin-top",'-401'*n+"px");
    }
    n++;
    $(".num>li").removeClass("active");
    if(a==3){
      a=0;
      $(".num>li:eq("+a+")").addClass("active");
    }
    else{
      $(".num>li:eq("+a+")").addClass("active");
    }
    // alert(a);
    a++;
  },2000)

});