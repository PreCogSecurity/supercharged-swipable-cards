var path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/'),
    publicPath: '/',
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
}
