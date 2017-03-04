var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.resolve('index.js'),

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '*']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-3' },
      { test: /\.scss$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.css$/, exclude: /nodes_modules/, use: ['style-loader', 'css-loader'] }
    ]
  }
}

