const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://booking-app-4-pmdb.onrender.com',
      changeOrigin: true,
    })
  );
};

