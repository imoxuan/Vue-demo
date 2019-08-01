<template>
  <div class="section">
    <h3>TodoList</h3>
    <p><input v-model="todoItem" type="text" required v-focus @keyup.enter="handelSubmit" /><button @click="handelSubmit">提交</button></p>
    <div class="line"></div>
    <h4>进行中 ({{ todoList.length }})</h4>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        <span class="w300">{{ item }}</span>
        <span><button @click="complete(item, index)">完成</button></span>
      </li>
    </ul>
    <div class="line"></div>
    <h4>已完成 ({{ completedList.length }})</h4>
    <ul>
      <li v-for="(item, index) in completedList" :key="index">
        <span class="w300">{{ item }}</span>
        <span><button @click="recall(item, index)">恢复</button></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todoItem: '',
      todoList: [],
      completedList: []
    }
  },
  methods: {
    handelSubmit() {
      this.todoList.push(this.todoItem)
      this.todoItem = ''
    },
    complete(item, index) {
      this.completedList.push(item)
      this.todoList.splice(index, 1);
    },
    recall(item, index) {
      this.todoList.push(item)
      this.completedList.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.section {
  width: 500px
}

.line {
  border-bottom: 1px solid #ccc;
}

.w300 {
  width: 300px;
  display: inline-block;
}
</style>