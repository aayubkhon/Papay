const path = require("path");
const multer = require("multer");
const uuid = require("uuid");
/* MULTER IMAGE UPLOADER*/
function getTargetImageStorage(address) {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./uploads/${address}`);
    },
    filename: (req, file, cb) => {
      console.log(file);
      const extension = path.parse(file.originalname).ext; //ext bu originalnamedagi .jpeg extentionni olib beradi.
      const random_name = uuid.v4() + extension;
      cb(null, random_name);
    },
  });
}
const makeUploader = (address) => {
  const storage = getTargetImageStorage(address);
  return multer({ storage: storage }); //1-storage multerni talab etilgan indexi
};
module.exports = makeUploader;


// const product_storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/products");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const extension = path.parse(file.originalname).ext
//     const random_name = uuid.v4() + extension
//     cb(null, random_name);
//   },
// });

// module.exports.uploadProductImg = multer({ storage: product_storage });
