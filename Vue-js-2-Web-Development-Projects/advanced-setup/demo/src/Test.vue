<template>
  <div>
    <template>
      <article class="article">
        <h3 class="title">{{ title }}</h3>
      </article>
    </template>
    <p>{{ message }}</p>
    <input v-model="message">
    <ul class="movies">
      <li v-for="movie of movies" class="movie">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello world",
      title: "Hello Vue!",
      movies: [{ title: "Star Wars" }, { title: "Blade Runner" }]
    };
  }
};
</script>

<style>
p {
  color: grey;
}
.movies {
  list-style: none;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}
</style>

<style lang="less" scoped>
.article {
  .title {
    border-bottom: solid 3px fade(red, 20%);
  }
}
</style>