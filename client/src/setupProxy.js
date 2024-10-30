const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://booking-app-b5mx.onrender.com',
      changeOrigin: true,
    })
  );
};

