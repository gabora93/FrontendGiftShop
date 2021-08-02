const proxy =  require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    "/api/",
    proxy({
      target: "https://http://boiling-badlands-34514.herokuapp.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/"
      },
    })
  );
};