module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://94.241.141.209:3005',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};