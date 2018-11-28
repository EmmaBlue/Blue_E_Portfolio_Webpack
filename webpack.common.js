const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
     entry: {
         app: './src/app.js'
       },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
        }
       }
     ]
   },

   module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, 
    ]
  },

   plugins: [
        new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
           title: 'Emma Jae Blue',
           template: './src/index.html'
         }),
         new VueLoaderPlugin()
       ]

  }
