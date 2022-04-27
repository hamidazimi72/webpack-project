const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    home: "./src/home.js",
    admin: "./src/admin.js",
  },
  output: {
    path: __dirname + "/output",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(woff|ttf|eot|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Home Page", template: "./index.html", filename: "index.html", chunks: ["home"] }),
    new HtmlWebpackPlugin({ title: "Admin Page", template: "./index.html", filename: "admin.html", chunks: ["admin"] }),
  ],
};

module.exports = (env, { mode }) => {
  let isDev = mode === "development";

  if (isDev) {
    config.module.rules.push(
      ...[
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/images/[name] [ext]",
          },
        },
      ]
    );
  }

  if (!isDev) {
    config.output.filename = "[name].[contenthash].js";

    config.module.rules.push(
      ...[
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
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/images/[name][contenthash][ext]",
          },
        },
      ]
    );

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      })
    );
  }

  config.module.rules.push(
    ...[
      { test: /\.css$/i, use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
      { test: /\.s[ac]ss$/i, use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
    ]
  );

  return config;
};
