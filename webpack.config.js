const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const sourcePath = path.join(__dirname, "./src");
// babel config
const babelLoaderConfig = {
  loader: "babel-loader",
  options: { babelrc: true },
};

module.exports = {
  context: sourcePath,
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // .js, .ts
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: [babelLoaderConfig],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      inject: "head",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};
