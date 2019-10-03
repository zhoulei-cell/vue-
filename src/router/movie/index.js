const movie = {
  path: "movie",
  name: "movie",
  redirect: "movie/beingHit",
  component: () => import("@/views/movie"),
  children: [
    {
      path: "city",
      name: "city",
      component: () => import("@/views/movie/menu/City")
    },
    {
      path: "beingHit",
      name: "beingHit",
      component: () => import("@/views/movie/menu/BeingHit")
    },
    {
      path: "comingSoon",
      name: "comingSoon",
      component: () => import("@/views/movie/menu/ComingSoon")
    },
    {
      path: "search",
      name: "search",
      component: () => import("@/views/movie/menu/Search")
    }
  ]
}
export default movie;