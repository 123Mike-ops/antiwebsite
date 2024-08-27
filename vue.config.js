const { defineConfig } = require('@vue/cli-service')

const PrerenderSPAPlugin = require('prerender-spa-plugin-next');

module.exports = defineConfig({
  transpileDependencies: true,
  // 配置反向代理
  devServer: {
    host: '0.0.0.0',
    port:3000,
    client: {
      webSocketURL: 'ws://0.0.0.0:3000/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_SERVER_URL,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },

    // https: true
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // 需要预渲染的页面，跟router路由一致
        routes: [ '/', '/contact', '/doctors', '/services', '/news', '/about','/comingsoon' ],
      })
    ]
  },
  // assetsPublicPath: '/',
  // assetsPublicPath: '/dist',
  // assetsPublicPath: '/introduce_web',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false
})
