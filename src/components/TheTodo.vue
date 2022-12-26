<template>
  <div>
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
    <p> {{ todo.status }}</p>
    <p> {{ todo.id }}</p>
  </div>
  <div>
    <button>Edit</button>
    <button @click="$emit('deleteTodo', todo.id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TheTodo',
  props: ['todo'],
  emits: ['deleteTodo'],
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
}
</style>
