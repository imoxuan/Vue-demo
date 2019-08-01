<template>
  <div>
    <h3>Vue 2.0示例</h3>
    <ul>
      <li v-for="(item, index) in sampleList" :key="index" ><router-link :to="item.path" tag="a">{{ item.title }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sample",
  data() {
    return {
      sampleList: [
        {
          id: 1,
          title: 'TodoList',
          path: 'todoList'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>