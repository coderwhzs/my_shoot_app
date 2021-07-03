<!--
 * @Description:
 * @Author: ZL
 * @Date: 2021-07-02 17:31:27
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-03 10:24:21
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
