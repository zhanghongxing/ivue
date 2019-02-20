<template>
  <div>
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