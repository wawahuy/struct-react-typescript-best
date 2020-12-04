const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    test: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: 'css-loader',
      }, 
      {
        test: /\.ts$/, use: 'ts-loader'
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  )
}

module.exports = config;
