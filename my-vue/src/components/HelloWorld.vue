<template>
  <div class="hello">
    <h2>{{b}}</h2>
    <input type="text" placeholder="请输入内容" v-model="msg" @keypress.enter="enter">
    <h1>{{toup}}</h1>
    <child :message="a" @listEvent="listFn"></child>
  </div>
</template>

<script>
//导入子组件
  import child from './child.vue'

  export default{
    data(){
      return{
        msg:'hello Vue',
        a:'123',
        b:''
      }
    },
    methods: {
      enter(){
        alert(this.msg);
      },
      listFn(val){
        this.b=val;
      }
    },
    computed: {
      toup(){
        return this.msg.toUpperCase();
      }
    },
    //注册组件
    components: {
      child
    }
  }
</script>


<style scoped>
  input{
    width: 200px;
    height: 30px;
    color: yellow;
  }
  h1{
    color: pink;
  }
</style>
