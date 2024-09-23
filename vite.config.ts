import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import commonjs from '@rollup/plugin-commonjs'
// import nodePolyfills from 'rollup-plugin-node-polyfills'

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/value-compass.github.io",
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [pathResolve('./src/assets/images')],
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 8080, // 使用的端口号
    open: true, // 是否自动打开浏览器
    watch: {
      usePolling: true, // 实时监听
      interval: 1000 // 监听的间隔时间(ms)
    },
  },
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  }
})

