const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/home.js",
    admin: "./src/admin.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: __dirname + "/output",
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets/images",
          publicPath: "output/assets/images",
          name: "[name].[contenthash].[ext]",
        },
      },
      {
        test: /\.(woff|ttf|eot|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({ template: "./index.html" }),
  ],
};
