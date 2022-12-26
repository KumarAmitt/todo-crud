<template>
  <h2>Edit Todo</h2>
  <form @submit.prevent="updateTodo">
    <label for="title">Title:
      <input type="text" id="title" v-model="title" />
    </label>

    <label for="description">Description:
      <textarea id="description" cols="30" rows="4" v-model="description"></textarea>
    </label>

    <button>Update Todo</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditTodo',
  props: ['id'],
  data() {
    return {
      title: '',
      description: '',
      status: '',
      baseURL: 'http://localhost:3000',
    };
  },
  methods: {
    async updateTodo() {
      try {
        await axios.patch(`${this.baseURL}/todos/${this.id}`, { title: this.title, description: this.description });
        this.$router.push('/');
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  async mounted() {
    try {
      const todo = (await axios.get(`${this.baseURL}/todos/${this.id}`)).data;
      this.title = todo.title;
      this.description = todo.description;
    } catch (error) {
      console.log(error.message);
    }
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
