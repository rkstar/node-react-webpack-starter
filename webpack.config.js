const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  devtool: 'eval',
  externals: [nodeExternals()],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: {
          loader: 'graphql-tag/loader',
        },
      },
    ],
  },
  plugins: [new webpack.SourceMapDevToolPlugin({ filename: '[name].js.map' })],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@graphql': path.resolve(__dirname, 'src/graphql'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
};
