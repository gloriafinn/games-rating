const fs = require("fs");//модуль для чтения файлов
const mimeTypes = require("./mime-types");//модуль для установки типа контента 

function staticFile(res, filePath, ext) {
    res.setHeader("Content-Type", mimeTypes[ext]);
    fs.readFile("./public" + filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Not Found");
      }
      res.end(data);
    });
  }
  
  module.exports = staticFile;