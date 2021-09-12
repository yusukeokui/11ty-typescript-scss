const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ["src/**/*.{scss,sass}", "!node_modules/**"],
  });

  return {
    dir: {
      input: "src",
      output: "_dist",
    },
  };
};
