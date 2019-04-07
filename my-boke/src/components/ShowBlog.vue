<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filterBlogs" class="single-blog">
      <router-link :to="'/blog/'+blog.id">
      <h2 v-rainbow>{{blog.title|to-upperCase}}</h2>
      </router-link>

      <article>
        {{blog.content|snippet}}
      </article>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'show-blogs',
  data(){
    return{
      blogs:[],
      search:""
    }
  },
  created(){
   axios.get('/posts.json')
    .then((data) => {

    //  this.blogs=data.body.slice(0,10);
    //   console.log(this.blogs);
    // return data.json();
    return data.data;
    })
    .then((data)=>{
      var blgoArray=[];
      for (let key in data) {
        // console.log(key);
        // console.log(data[key]);
        data[key].id=key;
        blgoArray.push(data[key]);

      }
      this.blogs=blgoArray;
    }).catch((err) => {
        alert(err);
    });
  },
  computed:{
    filterBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    //局部自定义指令的写法
    // "to-upperCase":(value)=>{
    //   return value.toUpperCase();
    // }
       toUpperCase(value){
      return value.toUpperCase();
    }
  },
  directives:{
      'rainbow':{
       bind(el, bindind, vnode) {
          el.style.color="#" + Math.random().toString(16).slice(2, 8);
       }
      }
    }
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px auto;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a{
  color: #444;
  text-decoration: none;
}
input[tyep="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
