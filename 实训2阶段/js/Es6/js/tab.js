class Tab{
  constructor(id){
    //获取元素
    this.main = document.querySelector(id);
    this.lis = this.main.querySelector('li');
    this.sections = this.main.querySelectorAll('section');
    this.init();
  }
  init(){
    //初始化操作，让相关元素绑定事件
    for(var i = 0 ; i<this.lis.length;i++){
      this.lis[i].indexx = i;
      this.lis[i].onclick = function(){
        console.log(this.index);
      }
    }
  }
  //1、切换功能
  toggleTab(){}
  //2、添加功能
  addTab(){}
  //3、删除功能
  removeTab(){}
  //4、修改功能
  editTab(){}
}
new Tab('#tab');