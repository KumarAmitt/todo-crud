<template>
  <h2>All Todos</h2>
  <div v-for="todo in todos" :key="todo.id">
    <the-todo :todo="todo"></the-todo>
  </div>
</template>

<script>
import axios from 'axios';
import TheTodo from '@/components/TheTodo.vue';

export default {
  name: 'HomeView',
  components: {
    TheTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  async mounted() {
    try {
      const todos = await axios.get('http://localhost:3000/todos');
      this.todos = todos.data;
    } catch (error) {
      console.log(error.message);
    }
  },

};
</script>
