const path = require('path')
const alias = require('./webpack.alias')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', '@babel/polyfill', './index.tsx'],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      ...alias.setAliasConfig(),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|webp|webm|svg|woff(2))$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      automaticNameDelimiter: '.',
      minChunks: 1,
    },
  },
  output: {
    chunkFilename: 'chunks/[name].[hash].js',
    filename: '[name].[hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
    new HtmlWebpackPlugin({ template: path.resolve('index.html') }),
    new CopyWebpackPlugin([{ from: 'assets', to: path.resolve(__dirname, '../dist/assets') }]),
  ],
}
