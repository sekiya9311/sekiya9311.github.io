const path = require('path');
const hardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
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
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new hardSourceWebpackPlugin()
  ],
  devServer: {
    contentBase: __dirname,
    port: 3000,
  }
};
