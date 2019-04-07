<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form action="" v-if="!submmited">
      <label for="">博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label for="">博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="">vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.catearr">
           <label for="">react.js</label>
        <input type="checkbox" value="react.js"  v-model="blog.catearr">
           <label for="">node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.catearr">
           <label for="">angular.js</label>
        <input type="checkbox" value="angular.js" v-model="blog.catearr">
      </div>
      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button @click.prevent="post">
        提交
      </button>
    </form>
    <div v-if="submmited">
      <h3>你的博客发布成功</h3>
    </div>
    <hr>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="catearr in blog.catearr">
          {{catearr}}
        </li>
      </ul>
      <p>作者{{blog.author}}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  //http://jsonplaceholder.typicode.com/posts
  name: 'dd-blog',
  data () {
    return {
      blog:{
        title:'',
        content:'',
        catearr:[],
        author:""
      },
      authors:['aaa','bbb','ccc'],
      submmited:false
    }
  },
  methods:{
    post:function(){
      // var _this=this;
      axios.post('/posts.json',this.blog)
      .then((result) => {
        // console.log(result);
        this.submmited=true;
      }).catch((err) => {

      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;
 }
 #add-blog{
   margin: 20px auto;
   max-width: 600px;
   padding: 10px;
 }
 label{
   display: block;
   margin: 20px 0 20px;
 }
 input[type="text"],textarea,select{
   display: block;
   width: 100%;
   padding: 8px;
 }
 textarea{
   height: 200px;
 }
 #checkboxes label{
   display: inline-block;
   margin-top: 0;
 }
 #checkboxes input{
   display: inline-block;
   margin-right: 10px;
 }
 button{
   display: block;
   margin: 20px 0;
   background: crimson;
   color: #fff;
   border: 0;
   padding: 14px;
   border-radius: 4px;
   font-size: 18px;
   cursor: pointer;
 }
 #preview{
   padding: 10px 20px;
   border: 1px dotted #ccc;
   margin: 30px 0;
 }
 h3{
   margin-top: 10px;

 }
</style>
