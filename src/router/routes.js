//组件
import Index from "@/views/Index"
import Login from "@/views/Login"
import Register from "@/views/Register"

//引入二级路由
import movie from "./movie"
import cinema from "./cinema"
import mine from "./mine"


//一级路由
const routes = [
  {
    path: "/index",
    name: "index",
    redirect: "/index/movie",
    component: Index,
    children: [
      movie,
      cinema,
      mine,
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  }
]

export default routes;