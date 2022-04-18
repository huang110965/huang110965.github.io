<template>
  <div class="home">
    <Header title='我的主页' rightVal='点我' />
    <div class="mains">
      <VirtualList :listData="data.listData">
        <!-- <template v-slot="scope">
          <div>
            作用域插槽{{scope.item.id}}
          </div>
        </template> -->
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
    const $http = getCurrentInstance().appContext.config.globalProperties.$http
    let data = reactive({
      listData: []
    })
    // const next = function () {
    //   // console.log('分享', process);
    //   console.log(111, $http);
    //   $http.post('/api/getMkdirFile').then((res) => {
    //     console.log(res, 'res');
    //     data.listData = res.data.city.cityList
    //   }).catch((err) => {
    //     console.log(err);
    //   })

    // }
    // next()
    for (let i = 0; i < 500; i++) {
      data.listData.push({
        CitySort: i,
        CityName: `城市${i}`
      })

    }
    return {
      data
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