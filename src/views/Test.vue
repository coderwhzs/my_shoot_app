<!--
 * @Description:Test组件
 * @Author: ZL
 * @Date: 2021-07-02 18:42:29
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 18:45:33
-->
<template>
  <div>
    <div>Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const count = ref<number>(0)
    const add = () => {
      count.value += 1
    }
    return { count, add }
  }
})
</script>
