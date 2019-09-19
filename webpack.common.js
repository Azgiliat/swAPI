const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require(`path`);
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: {
    main: ['./src/main.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "./fonts/[name].[ext]"
          }
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            name: "./img/[name].[ext]",
            publicPath: "./../"
          }
        }
      }
    ]
  },
  output: {
    filename: `[name].js`,
    path: path.join(__dirname, `docs`),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ]
};
