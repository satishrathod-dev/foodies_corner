// proxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");
const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // Remove /api prefix when forwarding the request
    },
    onProxyReq: (proxyReq, req, res) => {
      // Optionally add more headers here if needed
      proxyReq.setHeader("origin", "https://www.swiggy.com");
    },
  })
);

app.listen(5000, () => {
  console.log("Proxy server is running on http://localhost:5000");
});
