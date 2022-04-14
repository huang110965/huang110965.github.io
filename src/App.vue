<template>
  <router-view></router-view>
  <!-- <van-button type="primary" @click="onClick">主要按钮</van-button> -->
</template>

<script>
import { defineComponent } from "vue";
import { debounce } from './utils/index'
import '@/assets/style/root.scss'
export default defineComponent({
  setup () {
    let a = null
    const logs = () => {
      console.log('123');
    }
    const onClick = () => {
      a = a ? a : debounce(logs, 2000)
      a()
    }
    return {
      onClick
    }
  }
})

</script>

<style>
</style>
