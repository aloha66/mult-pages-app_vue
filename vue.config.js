const utils = require("./build/utils");
const path = require("path");
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: utils.setPages(),
  configureWebpack: config => {
    // config.entry = utils.getEntries();
    config;
    if (process.env.NODE_ENV === "production") {
      return {};
    } else {
      return {
        plugins: [
          // ...utils.htmlPlugin(),
          new webpack.DllReferencePlugin({
            context: __dirname,
            // manifest就是我们第一步中打包出来的json文件
            manifest: require("./public/vendor-manifest.json")
          })
        ]
      };
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("utils", resolve("src/utils"))
      .set("mixins", resolve("src/mixins"));
  }
};