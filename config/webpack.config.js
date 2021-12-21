const path = require('path')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dist = path.resolve(__dirname, '../dist')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: dist,
    filename: 'code-play.js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    compress: true,
    static: dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../demo/index.html')
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
