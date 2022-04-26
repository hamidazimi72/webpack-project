const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: "./src/home.js",
    admin: "./src/admin.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/output",
  },
  module: {
    rules: [
      { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets/images",
          publicPath: "output/assets/images",
          name: "[name].[ext]",
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
  plugins: [new MiniCssExtractPlugin()],
};
