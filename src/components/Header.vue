<template>
  <div class="headers">
    <div class="left">
      <slot name='left'>
        <van-icon name="arrow-left" />
      </slot>
    </div>
    <div class="center">{{title}}</div>
    <div class="right" @click="rightClick">
      <slot name='right'>{{rightVal}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String, default: '', reuquired: true
    },
    rightVal: {
      type: String, default: '', reuquired: false
    },

  },
  setup (props, context) {
    const rightClick = function () {
      context.emit('rightClick')
    }
    return {
      rightClick
    }
  },
}
</script>

<style lang="scss" scoped>
.headers {
  padding: 0 32px;
  height: 88px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 32px;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>