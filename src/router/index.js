import Vue from 'vue'
import Router from 'vue-router'
import User from "../components/User";
import Note from "../components/Note";
import UserShow from "../components/UserShow";

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/user", component: User},
    {path: "/note", component: Note},
    {path: "/usershow", component: UserShow},
    {path: "/", redirect: "/user"},
    {path: "/*", redirect: "/user"},

  ]
})
