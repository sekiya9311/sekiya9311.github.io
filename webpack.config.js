const path = require('path');
const hardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.js?$/,
        loader: "babel-loader"
      }
    ]
  },
  node: {
    __dirname: false
  },
  plugins: [
    new hardSourceWebpackPlugin()
  ]
};