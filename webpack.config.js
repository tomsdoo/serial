var path = require("path");

module.exports = {
  mode:"production",
  module:{
    rules:[
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      }
    ]
  },
  entry:{
    "serial":"./src/use-serial.js"
  },
  output:{
    path:path.join(__dirname,"dist"),
    filename:"[name].js"
  }
};
