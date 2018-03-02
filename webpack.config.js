const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    domWorker: './src/domWorker.js',
    element: './src/element.js',
    list: './src/list.js',
    seq: './src/seq.js',
    set: './src/set.js',
    string: './src/string.js',
    vector: './src/vector.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'squidjs',
    libraryTarget: 'umd',
    filename: '[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
