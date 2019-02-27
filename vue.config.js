const utils = require("./build/utils");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: utils.setPages(),
  // configureWebpack: config => {
  //   config.entry = utils.getEntries();
  //   return {
  //     plugins: [...utils.htmlPlugin()]
  //   };
  // }
  chainWebpack: config => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("utils", resolve("src/utils"))
      .set("mixins", resolve("src/mixins"));
  }
};
