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

       {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        }
    ]
  }, 

   plugins: [
        new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
           title: 'Emma Jae Blue',
           template: './src/index.html'
         }),

         new HtmlWebpackPlugin({
          title: 'Projects',
          template: './src/projects.html'
        }),

        new HtmlWebpackPlugin({
          title: 'Community',
          template: './src/community.html'
        }),

        new HtmlWebpackPlugin({
          title: 'Contact',
          template: './src/contact.html'
        }),
         new VueLoaderPlugin()
       ]

  }
