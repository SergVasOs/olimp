const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "script.js",
  },
  devServer: {
    port: 5000,
    contentBase: path.join(__dirname, 'public'),
    inline:true,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              root: path.resolve(__dirname, 'src'),
            }
          },
        ]
      },
      {
        test: /.(jpg|jpeg|png|svg|ttf)$/,
        use: [
          {
            loader: "file-loader",
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {loader: "css-loader"},
          {loader: "postcss-loader"},
          {loader: "sass-loader"},
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/page/catalog.pug',
      filename: 'catalog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page/product.pug',
      filename: 'product.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
  }
  if (argv.mode === 'production') {
  }
  return config;
};