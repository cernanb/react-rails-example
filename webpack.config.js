module.exports = {
    entry: __dirname + "/app/assets/javascripts/react/Main.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
              test: /\.jsx$/,
              loader: "babel-loader",
              query: {
                presets:['es2015','react']
              }
            }
        ]
    }

};
