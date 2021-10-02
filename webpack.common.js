{
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CopyWebpackPlugin = require('copy-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      background: path.resolve(__dirname, 'src', './background.js'),
      popup: path.resolve(__dirname, 'src', './popup/popup.js'),
      content: path.resolve(__dirname, 'src', './contentScripts/mainContentScript.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },

    module: {
      rules: [
        {
          test: /\.js|.jsx$/,
          exclude: /node_modules/,
          enforce: 'pre',
          use: ['babel-loader', 'source-map-loader'],
        },
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'popup.html',
        template: 'src/popup/popup.html',
        chunks: ['popup'],
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/manifest.json', to: '[name][ext]' },
          { from: 'src/images/broccoli.png', to: '[name][ext]' },
        ],
      }),
      new CleanWebpackPlugin(),
    ],
  };
}
