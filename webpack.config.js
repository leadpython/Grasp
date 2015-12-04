module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
          {
            presets:['es2015', 'react']
          }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
  context: __dirname + "/client",
  entry: {
  javascript: "./app.jsx",
  html: "./index.html",
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
}
