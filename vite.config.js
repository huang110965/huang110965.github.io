import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'//引入jsx
import styleImport, { VantResolve } from 'vite-plugin-style-import';//按需引入vant
const path = require('path')
import { resolve } from 'path' // 主要用于alias文件路径别名
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),
  styleImport({
    resolves: [VantResolve()],
  }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  // 反向代理
  server: {
    port: 8080,
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    proxy: {
      '/api': {
        target: 'https://www.vue-js.com/',
        changeOrigin: true,
        rewrite: (paths) => paths.replace(/^\/api/, ''),
      },
    },
  },
  // 原文链接：https://blog.csdn.net/weixin_45292658/article/details/109447633
})
