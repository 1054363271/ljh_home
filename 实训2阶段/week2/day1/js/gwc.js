var boxAll = document.getElementById("all");
var boxs = document.getElementsByClassName("1")
boxAll.onclick = function(){
  for(var i = 0 ; i < boxs.length ; i++){
    boxs[i].checked = this.checked;
  }
}
for(i = 0 ; i< boxs.length ; i++){
  boxs[i].onclick = function(){
    var flag = true;
    for(i = 0 ; i< boxs.length ; i++){
      if(!boxs[i].checked){
        flag = false;
      }
    }
    boxAll.checked = flag;
  }
}
// if(boxs[0].checked == true && boxs[1].checked == true && boxs[2].checked == true){
//   boxAll.checked = true;
// }
// else{
//   boxAll.checked = false;
// }