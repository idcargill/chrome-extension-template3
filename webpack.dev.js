const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    historyApiFallback: true,
    compress: true,
    port: 4000,
    inline: true,
    hot: true,
  },
});
