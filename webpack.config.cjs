const path = require("path");

module.exports = {
  mode: "development",
  entry: "./application/static/js/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "application", "static", "js"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
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
};
