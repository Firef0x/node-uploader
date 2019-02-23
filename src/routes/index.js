const uploadController = require('../uploadController');

module.exports = {
  init: (app) => {
    app.post('/upload', uploadController.dataInput);
  }
};
