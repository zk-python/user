<template>
    <div>
      <h2>留言板</h2>
      <hr>
      <input type="text" v-model="msg">
      <button @click="add_note">发表留言</button>
      <hr>
      <ul>
        <li v-for="(value,index) in msg_list" :key="index">{{value}}
          <a href="javascript:;" @click="delNote(index)">删除</a></li>
      </ul>
      <span>总数量：{{msg_list.length}}条</span>
      <input type="button" value="清空留言板" @click="delAll" v-show="msg_list.length!=0">

    </div>
</template>

<script>
export default {
  name: "Note",
  data(){
    return{
      msg: "",
      // 判断localStorage.msg_list是否有值  有值则显示  无值则设置为空
      msg_list:localStorage.msg_list ? JSON.parse(localStorage.msg_list) : [],
    }
  },methods:{
    //发表留言
    add_note(){
      let msg=this.msg;
      if(msg){
        // 将留言板数据进行持久化 到localStorage
        this.msg_list.push(this.msg)
        localStorage.msg_list = JSON.stringify(this.msg_list);
        this.msg = "";

      }
      //删除留言
    },
    delNote(index){
      this.msg_list = JSON.parse(localStorage.msg_list)
      this.msg_list.splice(index, 1)  // 参数1：从哪个下标开始删除 参数2：删除几个元素

      localStorage.msg_list = JSON.stringify(this.msg_list)
    },
    //删除所有
    delAll(){
      this.msg_list=[]
      localStorage.clear()
    }
  },
}
</script>

<style scoped>
h2{
  color:red;
}
</style>
