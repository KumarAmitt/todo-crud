<template>
  <div>
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
    <p> {{ todo.status }}</p>
  </div>
  <div>
    <button>Edit</button>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TheTodo',
  props: ['todo'],
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
}
</style>
