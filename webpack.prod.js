const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

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
      'sass-loader?prependData=@import "./src/scss/style.scss";'
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
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './docs',
    open: true,
    hot: true,
    watchContentBase: true,
  }
});
