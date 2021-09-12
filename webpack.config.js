const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/assets/scripts/main.ts",
  output: {
    path: path.resolve(__dirname, "_dist/assets/scripts"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  // import 文で .ts ファイルを解決
  resolve: {
    extensions: [".ts", ".js"],
  },
};
