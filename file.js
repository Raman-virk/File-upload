const path = require('path');
const express = require('express');
const multer = require('multer');
const Router = express.Router();
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
    },
    filename(req, file, cb) {
      cb(null, '${new Date().getTime()}_${file.originalname}');
    }
  })
});
// }).array("multipleImage", 10);

// Router.post(
//   '/upload', function(req,res) {
//   upload(req, res, function(err){
//     if (err) {
//         return res.send("Files Uploading Unsuccessful! Make sure only 10 files can be uploaded at once.");
//     }
// });
//   });

Router.post(
    '/upload',
    upload.single('file'),
    function (req, res){
        const file = req.file 
        res.send('file uploaded successfully.');
      } 
  );

module.exports = Router;