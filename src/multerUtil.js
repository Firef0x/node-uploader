const multer = require('multer');
const storage = multer.diskStorage({
  // 设置上传后文件路径，uploads文件夹会自动创建。
  destination(req, file, cb) {
    cb(null, './uploads');
  },
  // 给上传文件重命名，获取添加后缀名
  filename(req, file, cb) {
    const fileFormat = file.originalname;
    cb(null, fileFormat);
  }
});

// 添加配置文件到 multer 对象。
const upload = multer({
  storage
});
// 导出对象
module.exports = upload;
