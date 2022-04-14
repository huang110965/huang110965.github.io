<template>
  <div class="home">
    <Header title='我的主页' rightVal='分享' @rightClick='next' />
    <div class="mains">
      <VirtualList :listData="d">
        <template v-slot="scope">
          <div>
            作用域插槽{{scope.item.id}}
          </div>
        </template>
      </VirtualList>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import VirtualList from '@/components/VirtualList.vue'
import { reactive } from '@vue/reactivity';
export default defineComponent({
  components: { Header, VirtualList },
  setup (props, context) {
    console.log(props, context, 'context');
    const $http = getCurrentInstance()?.appContext.config.globalProperties.$http
    const next = function () {
      // console.log('分享', process);
      $http.get('/api/v1/topics').then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })

    }
    const d = reactive([])
    for (let i = 0; i < 500; i++) {
      d.push({ id: i, value: `我是${i}号` });
    }

    return {
      next,
      d
    }
  }
})
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .mains {
    height: calc(100vh - 88px);
    overflow: auto;
  }
}
</style>