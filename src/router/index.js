import { createRouter, createWebHistory } from 'vue-router';
import AddTodo from '@/views/AddTodo.vue';
import EditTodo from '@/views/EditTodo.vue';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/new',
    name: 'addTodo',
    component: AddTodo,
  },
  {
    path: '/todos/:id',
    name: 'editTodo',
    component: EditTodo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
