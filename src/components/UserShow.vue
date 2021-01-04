<template>

  <table>
    <tr v-for="(value, key, index) in user_list[index]"  :key="index">
      <th>{{key}}</th>
      <td> {{value}}</td>
    </tr>
  </table>

</template>

<script>
export default {
  name: "UserShow",
  data(){
    return{
      user_list: [
        {id: 1, name: "小黑", age: 12, msg: "我是python大神"},
        {id: 2, name: "小白", age: 32, msg: "我是python大神"},
        {id: 3, name: "小子", age: 42, msg: "我是python大神"},
        {id: 4, name: "小绿", age: 52, msg: "我是python大神"},
      ],
      index:this.$route.query.index
    }
  },
}
</script>

<style scoped>

</style>
