const {getDefaultConfig} = require("expo/metro-config");


const config = getDefaultConfig(__dirname);


config.resolver.assetExts.push(
  "png",
  "svg",
  "jpg",
  "jpeg",
  "gif",
  "webp",

)

module.exports = config;