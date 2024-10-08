module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/, // Target .pug files
        use: [
          {
            loader: 'html-loader', // First convert Pug to HTML
          },
          {
            loader: 'pug-html-loader', // Then convert Pug template into a string
            options: {
              pretty: true, // Optional: Beautifies the output HTML
            }
          }
        ]
      }
    ]
  }
};
