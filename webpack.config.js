module.exports = {
    // ...other webpack config options
    module: {
      rules: [
        {
          test: /\.js(x)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output filename
    },
    resolve: {
      extensions: ['.js', '.jsx'], // Enable importing .js and .jsx files without specifying the extension
    },
  };
  