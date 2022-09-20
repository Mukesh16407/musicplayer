const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: "self23455",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


module.exports = {cloudinary};