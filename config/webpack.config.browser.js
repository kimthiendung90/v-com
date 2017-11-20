var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var path = require('path')

var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var outputFile = 'v-com'
var globalName = 'VCom'

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.browser.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  externals: {
    vue: 'vue',
    moment: 'moment'
  },
  plugins: [
    new UglifyJSPlugin(),
  ],
})
