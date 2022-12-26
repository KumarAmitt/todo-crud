<template>
  <div>
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.description }}</p>
    <p> {{ todo.status }}</p>
    <p> {{ todo.id }}</p>
  </div>
  <div>
    <router-link :to="{name: 'editTodo', params: {id: todo.id}}">Edit</router-link>
    <button @click="$emit('deleteTodo', todo.id)">Delete</button>
    <button @click="$emit('toggleStatus', todo.id)">Toggle Status</button>
  </div>
</template>

<script>

export default {
  name: 'TheTodo',
  props: ['todo'],
  emits: ['deleteTodo', 'toggleStatus'],
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
}
</style>
