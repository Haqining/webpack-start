const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 开发模式
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: "[name].[hash:8].js", // 打包后文件名
    path: path.resolve(__dirname, "../dist") // 打包目标文件夹
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] // 从右向左解析
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: ["autoprefixer"] } }
          },
          "less-loader"
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: ["autoprefixer"] } }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: "body", // 引入 js 文件到 <body>
      scriptLoading: "blocking" // js 文件的加载模式
    }),
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" })
  ]
};
