<template>
  <h2>Add New Todo</h2>
  <form @submit.prevent="addTodo">
    <label for="title">Title:
      <input type="text" id="title" v-model="title" />
    </label>

    <label for="description">Description:
      <textarea id="description" cols="30" rows="4" v-model="description"></textarea>
    </label>

    <button>Add Todo</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
      description: '',
      status: false,
      baseURL: 'http://localhost:3000',
    };
  },
  methods: {
    async addTodo() {
      const todo = {
        title: this.title,
        description: this.description,
        status: false,
      };
      try {
        await axios.post(`${this.baseURL}/todos`, todo);
        this.$router.push('/');
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style scoped>

form {
  border: 1px solid #ccc;
  padding: 2em;
}
label, input, textarea {
  display: block;
}

label, button {
  margin-top: 2em;
}
</style>
