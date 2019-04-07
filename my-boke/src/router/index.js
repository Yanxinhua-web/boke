import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from "../components/AddBlog.vue"
import ShowBlog from "../components/ShowBlog"
import SingleBlog from "../components/SingleBlog"
import EditBlog from "../components/EditBlog"



Vue.use(Router)

export default[
  {
    path: '/add',
    name: 'AddBlog',
    component: AddBlog
  },
  {
    path: '/',
    name: 'ShowBlog',
    component: ShowBlog
  },
  {
    path: '/blog/:id',
    component: SingleBlog
  },
  {
    path: '/edit/:id',
    component: EditBlog
  }
]
