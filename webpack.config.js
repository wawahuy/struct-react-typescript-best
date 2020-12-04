const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    test: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/, use: 'css-loader',
        use: ["style-loader", "css-loader", "sass-loader"]
      }, 
      {
        test: /\.ts$/, use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, "/src/index.html") }),
  ],
  devServer: {
    hot: true,       
    port: 3000,        
    host: 'localhost'
  },
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
