<template>
  <h2>All Todos</h2>
  <div v-for="todo in todos" :key="todo.id">
    <the-todo :todo="todo" @deleteTodo="deleteTodo" @toggle-status="toggleStatus"></the-todo>
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
      baseURL: 'http://localhost:3000',
      todos: [],
    };
  },
  methods: {
    async deleteTodo(id) {
      try {
        await axios.delete(`${this.baseURL}/todos/${id}`);
        this.todos = this.todos.filter((todo) => todo.id !== id);
      } catch (error) {
        console.log(error.message);
      }
    },
    async toggleStatus(id) {
      try {
        const todo = this.todos.find((t) => t.id === id);
        await axios.patch(`${this.baseURL}/todos/${id}`, { status: !todo.status });
        todo.status = !todo.status;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  async mounted() {
    try {
      this.todos = (await axios.get(`${this.baseURL}/todos`)).data;
    } catch (error) {
      console.log(error.message);
    }
  },

};
</script>
