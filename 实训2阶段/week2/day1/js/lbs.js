$(document).ready(function(){
  var i = 1 ;
  function func(){
    if(i==5){
      $(".top img").attr({"src":"../images/" + i + ".jpg"});
      $("li").removeClass("bg");
       $("li:eq(4)").attr({"class":"bg"});
      i = 1;
    }else{
      $(".top img").attr({"src":"../images/" + i + ".jpg"});
      $("li").removeClass("bg");
      var s = i-1;
       $("li:eq("+s+")").attr({"class":"bg"});
      i++;
      // console.log(s);
    }
  }
  var times = setInterval(func, 1000);
   $("ul li").hover(function () {
    clearInterval(times);
    $("li").removeClass("bg");
    var a = $(this).text();
    $(".top img").attr({"src":"../images/" + a + ".jpg"});
    $(this).addClass("bg");
    i = ++a;
   },
  function(){
    // $(this).removeClass("bg");
   times = setInterval(func,1000);
  })
});