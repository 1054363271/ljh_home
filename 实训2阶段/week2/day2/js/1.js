$(document).ready(function(){
  $(".ss_listBg").hover(function(){
    $(".ss_list_bg").slideDown(500);
  },function(){
    $(".ss_list_bg").slideUp(500);
  });
  $(".car_t").toggle(function(){
    $(".last").css("display","block");
  },function(){
    $(".last").css("display","none");
  });
  
//  alert(shop1);
  // var sum1 = 0;
  // var sum2 = 0;
  // var sum3 = 0;
  $(".J_totalPrice").text(parseInt(0));
  $(".J_inputCount").val(0);
  $(".J_smallTotalPrice").text(parseInt(0));
  
    $(".shop>ul>li:eq(0) .J_btnDelCount").click(function(){
      var n= $(this).siblings(".J_inputCount").val();
      var num=parseInt(n)-1;
      if(num < 0){ return ;}
      $(this).siblings(".J_inputCount").val(num);
     var sum1 = parseInt(num * 190);
      $(this).parent(".plush").siblings(".J_smallTotalPrice").text(sum1);
      return $(".J_totalPrice").text(sum1+parseInt($(".shop>ul>li:eq(1) .J_smallTotalPrice").text())+parseInt($(".shop>ul>li:eq(2) .J_smallTotalPrice").text()));
    });
    $(".shop>ul>li:eq(0) .J_btnAddCount").click(function(){
      var n = $(this).siblings(".J_inputCount").val();
      var num=parseInt(n)+1;
      if(num < 0){ return ;}
      $(this).siblings(".J_inputCount").val(num);
     var sum1 = parseInt(num * 190);
      $(this).parent(".plush").siblings(".J_smallTotalPrice").text(sum1);
      return $(".J_totalPrice").text(sum1+parseInt($(".shop>ul>li:eq(1) .J_smallTotalPrice").text())+parseInt($(".shop>ul>li:eq(2) .J_smallTotalPrice").text()));
    });
    $(".shop>ul>li:eq(1) .J_btnDelCount").click(function(){
      var n= $(this).siblings(".J_inputCount").val();
      var num=parseInt(n)-1;
      if(num < 0){ return ;}
      $(this).siblings(".J_inputCount").val(num);
    var sum2 = parseInt(num * 20);
      $(this).parent(".plush").siblings(".J_smallTotalPrice").text(sum2);
      $(".J_totalPrice").text(sum2+parseInt($(".shop>ul>li:eq(0) .J_smallTotalPrice").text())+parseInt($(".shop>ul>li:eq(2) .J_smallTotalPrice").text()));
    });
    $(".shop>ul>li:eq(1) .J_btnAddCount").click(function(){
      var n = $(this).siblings(".J_inputCount").val();
      var num=parseInt(n)+1;
      if(num < 0){ return ;}
      $(this).siblings(".J_inputCount").val(num);
     var sum2 = parseInt(num * 20);
      $(this).parent(".plush").siblings(".J_smallTotalPrice").text(sum2);
      $(".J_totalPrice").text(sum2+parseInt($(".shop>ul>li:eq(0) .J_smallTotalPrice").text())+parseInt($(".shop>ul>li:eq(2) .J_smallTotalPrice").text()));
    });
    $(".shop>ul>li:eq(2) .J_btnDelCount").click(function(){
      var n= $(this).siblings(".J_inputCount").val();
      var num=parseInt(n)-1;
      if(num < 0){ return ;}
      $(this).siblings(".J_inputCount").val(num);
     var sum3 = parseInt(num * 758);
      $(this).parent(".plush").siblings(".J_smallTotalPrice").text(sum3);
      $(".J_totalPrice").text(sum3+parseInt($(".shop>ul>li:eq(1) .J_smallTotalPrice").text())+parseInt($(".shop>ul>li:eq(0) .J_smallTotalPrice").text()));
    });
    $(".shop>ul>li:eq(2) .J_btnAddCount").click(function(){
      var n = $(this).siblings(".J_inputCount").val();
      var num=parseInt(n)+1;
      if(num < 0){ return ;}
      $(this).siblings(".J_inputCount").val(num);
     var sum3 = parseInt(num * 758);
      $(this).parent(".plush").siblings(".J_smallTotalPrice").text(sum3);
      $(".J_totalPrice").text(sum3+parseInt($(".shop>ul>li:eq(1) .J_smallTotalPrice").text())+parseInt($(".shop>ul>li:eq(0) .J_smallTotalPrice").text()));
    });
    $(".shop>ul>li:eq(0) .J_btnDelete").click(function(){
      $(".shop>ul>li:eq(0)").css("display","none");
      $(".shop>ul>li:eq(0) .J_smallTotalPrice").text(0);
    });
    $(".shop>ul>li:eq(1) .J_btnDelete").click(function(){
      $(".shop>ul>li:eq(1)").css("display","none");
      $(".shop>ul>li:eq(1) .J_smallTotalPrice").text(0);
    });
    $(".shop>ul>li:eq(2) .J_btnDelete").click(function(){
      $(".shop>ul>li:eq(2)").css("display","none");
      $(".shop>ul>li:eq(2) .J_smallTotalPrice").text(0);
    });
  //  var ss = function(){
  //   $(".J_totalPrice").text(parseInt($(".shop>ul>li:eq(2) .J_smallTotalPrice").text())+parseInt($(".shop>ul>li:eq(1) .J_smallTotalPrice").text())+parseInt($(".shop>ul>li:eq(0) .J_smallTotalPrice").text()));
  //  }
  //  ss();
    // $(".J_totalPrice").text('￥'+sum1+sum2+sum3);
});