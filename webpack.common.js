const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require(`path`);


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
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
      },
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
    new CleanWebpackPlugin(),
  ]
};
