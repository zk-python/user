<template>
<div>
  <h2>用户管理</h2>
  <table border="1">
    <tr>
      <th>ID</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>个人信息</th>
      <th>操作</th>
    </tr>
    <tr v-for="(user, index) in  user_list" :key="index">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.msg }}</td>
      <td>
        <button @click="show_1(index)">查看用户详情</button>
        <button @click="delNote(index)">删除</button>

      </td>
    </tr>
  </table>



</div>
</template>

<script>
export default {
name: "user",
  data(){
  return{
    user_list:[
      {id: 1, name: "小黑", age: 12, msg: "我是python大神"},
      {id: 2, name: "小白", age: 32, msg: "我是python大神"},
      {id: 3, name: "小子", age: 42, msg: "我是python大神"},
      {id: 4, name: "小绿", age: 52, msg: "我是python大神"},
    ]

  }
  },methods:{
    delNote(index){
      this.user_list.splice(index,1)
    },

    show_1(index){
      this.$router.push({
        path:"/usershow?index="+index,
      })
    },
  },
}
</script>

<style scoped>
h2{
  color:red;
}
</style>
