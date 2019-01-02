const fs = require('fs');
const multerUtil = require('./multerUtil');
// multer有single()中的名称必须是表单上传字段的name名称。
const upload = multerUtil.array('uploadFile');
const uploadFolder = './upload';

// 创建文件夹
const createFolder = (folder) => {
  try {
    // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
    // 如果文件路径不存在将会抛出错误"no such file or directory"
    fs.accessSync(folder);
  } catch (e) {
    // 文件夹不存在，以同步的方式创建文件目录。
    fs.mkdirSync(folder);
  }
};

exports.dataInput = (req, res) => {
  createFolder(uploadFolder);
  upload(req, res, (err) => {
    // 添加错误处理
    if (err) {
      return console.log(err);
    }
    // 文件信息在req.file或者req.files中显示。
    res.send(200);
  });
};
