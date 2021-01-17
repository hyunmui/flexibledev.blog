const path = require("path");

module.exports = {
  entry: "./wwwroot/js/site.js",
  output: {
    filename: "site.js",
    path: path.resolve(__dirname + "/wwwroot/dist/js")
  },
};
