<template>
  <div id="app">
    <h3>欢迎访问百知教育信息管理系统</h3>
    <router-link to="/user">用户管理</router-link>
    <router-link to="/note">留言板</router-link>
<!--    <router-link to="/usershow ?id=">用户详情</router-link>-->




      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
