<template>
  <div>
    <h1>我是来自子组件的标题</h1>
    <p>{{message}}</p>
    <button @click="sendFn()">点击我传值</button>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        
      }
    },
      props: ['message'],
      methods: {
        sendFn:function(){
          this.$emit("listEvent","我是子组件传过来的值");
        }
      }
  }
</script>

<style >

</style>