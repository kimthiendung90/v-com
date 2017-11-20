var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

var outputFile = 'v-com'
var globalName = 'VCom'

var config = require('../package.json')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
            sass: ExtractTextPlugin.extract('css-loader!sass-loader'),
            scss: ExtractTextPlugin.extract('css-loader!sass-loader'),
            less: ExtractTextPlugin.extract('css-loader!less-loader'),
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(config.version),
    }),
    new ExtractTextPlugin(outputFile + '.css'),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
    }
  },
}
