import webpack from 'webpack';
import path from 'path';

//{test: /(\.scss)$/, include: path.join(__dirname, 'src'), loaders: ['style-loader', 'css-loader', 'postcss-loader']},
//{test: /(\.css)$/, loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]']},

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index'),
    path.resolve(__dirname, 'src/styles/styles.scss')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  }, 
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  module: {
      rules: [
        {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
        {test: /(\.scss)$/, include: path.join(__dirname, 'src'), loaders: ['style-loader', 'css-loader', 'sass-loader']},
        {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
        {test: /(\.jpg)$/, loaders: ['file-loader']},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
        {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
      ]
  }
};