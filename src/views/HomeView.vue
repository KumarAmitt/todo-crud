<template>
  <h2>This is the HOME page</h2>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      todos: [],
    };
  },
  async mounted() {
    try {
      const todos = await axios.get('http://localhost:3000/todos');
      console.log(todos)

    } catch (error) {
        console.log(error.message);
    }
  }

};
</script>
