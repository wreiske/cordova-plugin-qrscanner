const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

const path = require('path');

module.exports = {
  entry: {
    worker: path.join(__dirname, './src/browser/src/worker.js'),
  },
  output: {
    path: path.join(__dirname, './src/browser'),
    filename: 'worker.min.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}
