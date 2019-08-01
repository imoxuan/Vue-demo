const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  // 部署应用包时的基本 URL
  publicPath: '/',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      less: {
          javascriptEnabled: true,
      }
    }
  },
  configureWebpack: config => {
    Object.assign(config, {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src')
        }
      }
    })
  },
}
