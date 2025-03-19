<template>
  <p>Post View del elemento: {{ post.id }}</p>
  <h3>{{ post.title }}</h3>
  <p>{{ post.body }}</p>
  <router-link :to="{ name: 'blog' }">Volver atras</router-link>
</template>

<script lang="ts" setup>
import PostService from "@/services/PostService";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const service = new PostService();
const post = service.getPost();

onMounted(async () => {
  const route = useRoute();
  await service.fetchPost(route.params.id.toString());
  console.log(post.value);
});
</script>

<style scoped></style>
