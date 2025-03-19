<template>
  <h1>Blog Section</h1>
  <div class="container">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">{{
          post.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import PostService from "@/services/PostService";
import { onMounted } from "vue";

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => {
  await service.fetchAll();
});
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-aroun;
  ul {
    width: 90%;
    list-style-type: none;
    text-decoration: none;
    padding: 10px;
    li {
      margin: 10px;
      border: solid 1px black;
      border-radius: 10px;
      padding: 20px;
      cursor: pointer;
      background-color: antiquewhite;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
