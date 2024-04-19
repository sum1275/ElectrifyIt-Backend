module.exports = (app) => {
const vehicle=require('../controllers/vehicle');
var multer = require("multer");

var storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    var file_name_ext = file.originalname.split(".");
    cb(null, Date.now() + "." + file_name_ext[file_name_ext.length - 1]);
  },
});

  
var upload = multer({ storage: storage });
  
let bulkUpload = upload.fields([{name:"file"}])
app.post('/api/vehicle/bulkupload',bulkUpload,vehicle.bulkUpload);
 app.get('/api/vehicle/listing',vehicle.vehicleListing);

}