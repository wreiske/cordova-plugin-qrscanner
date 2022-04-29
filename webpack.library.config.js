const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  devtool: 'source-map',
  entry: {
    worker: path.join(__dirname, './src/browser/src/library.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'cordova-plugin-qrscanner-lib.min.js',
    library: 'QRScanner',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
