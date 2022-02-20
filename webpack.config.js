const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const extensions = ["popup", "background"];
const manifest = require("./src/manifest.json");

module.exports = {
  entry: {
    autobid: "./src/features/AutoBid.jsx",
    autochat: "./src/features/AutoChat.jsx",
    popup: "./src/popup.jsx",
    background: "./src/background.js",
  },
  output: {
    filename: (pathData) => {
      return extensions.indexOf(pathData.chunk.name) > -1
        ? "[name].js"
        : "features/[name].js";
    },
    path: path.resolve(`dist/${manifest.version}`),
    publicPath: "/",
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.json$/,
        // loader: "file-loader?name=[name].json",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new MiniCssExtractPlugin({
      filename: (pathData) => {
        return pathData.chunk.name === "popup" ? "popup.css" : "index.css";
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: "extensions", to: "" },
        { from: "src/manifest.json", to: "" },
      ],
    }),
  ],
};
