const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
      'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
      },
      'css-loader',
      'sass-loader'
    ],
  }
  ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/style.css',
    })
  ]
});