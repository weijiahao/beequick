/*
 */
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  // 入口
  entry: './src/scripts/app.js', // 1种
  // entry:['./src/search.js','./src/app.js'],  //2种
  // entry:{                                 //3种
  //   app:'./src/app.js',
  //   search:'./src/search.js'
  // },
  // 出口
  output: {
    path: __dirname + '/build',
    // filename:'bundle.js'
    // filename:'[name].js'
    filename: 'app_[hash].js'
  // filename:'[name]_[chunkhash].js'
  },

  // 浏览器sources中代码显示
  devtool: 'source-map',

  // 引入loaders
  module: {
    loaders: [
      // css loader
      {
        test: /\.css$/,
        // loader:'style-loader!css-loader'
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }, {
        test: /\.scss$/,
        // loader:'style-loader!css-loader!sass-loader'
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }, {
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_moduled
        loader: 'react-hot-loader!babel-loader' // es6模块化开发
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/, // 不编译node_moduled
        loader: 'react-hot-loader!babel-loader' // es6模块化开发
      }
    ]
  },

  // 启动服务
  devServer: {
    contentBase: './build',
    port: 8080,
    proxy: { // 配置代理服务
      '/api': {
        target: 'http://localhost:9000/',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  // 配置插件
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress:{
    //     warnings:false
    //   },
    //   output:{
    //     comments:false
    //   }
    // }),
    new HtmlWebpackPlugin({
      title: 'webpack demo',
      filename: 'app.html',
      template: 'my-webpack.ejs'
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    })
  ],
  // 外部文件   这里的东西不被打包，都是项目依赖
  externals: {
    jquery: 'window.jQuery',
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
    'flux': 'window.Flux'
  }
}
