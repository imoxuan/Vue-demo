import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Sample from '../components/Sample.vue'
import TodoList from '@/components/todoList/TodoList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/sample',
      children: [
        {
          path: 'sample',
          component: Sample
        }
      ]
    },
    {
      path: '/todoList',
      component: TodoList
    }
  ]
})
