var debug = process.env.NODE_ENV !== "production";
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/js/client.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-0', 'react'] }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  }
};