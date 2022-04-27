module.exports = {
  entry: {
    home: "./src/home.js",
    admin: "./src/admin.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/output",
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
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
    ],
  },
  plugins: [],
};
