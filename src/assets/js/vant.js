import { Button, Icon, Toast } from 'vant'
const vants = [
  Button,
  Icon,
  Toast
]
export default {

  install (Vue) {
    vants.forEach(item => {
      Vue.use(item)
    })
  }
}
