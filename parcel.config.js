module.exports = {
    // Specify entry point of your application
    entry: './src/index.html',
    
    // Specify output directory where bundled files will be placed
    // This will create a 'dist' directory in your project
    output: {
      path: './dist',
      filename: 'bundle.js'
    }
  };