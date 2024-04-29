const fs = require("fs");//Для асинхронного чтения файла импортируется встроенный модуль 
const { getRandomGame } = require("../appModules/api");

//Функция-контроллер.В этом контроллере мы обрабатываем запрос без тела, поэтому используем только объект ответа res
//Используя метод readFile модуля fs, мы асинхронно читаем файл и получаем его содержимое в переменную ratingFile и передаётся в функцию обратного вызова (колбэк).
async function gameRouteController(res) {
    fs.readFile("./dataset/rating.json", (err, ratingFile) => {    
        //проверяем наличие ошибок при чтении файла     
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
      const data = JSON.parse(ratingFile);   //чтение прошло успешно, используем JSON.parse для преобразования данных
      const game = getRandomGame(data);       //Из полученного массива данных выбираем первый элемент, который содержит информацию об игре, и сохраняем его в переменную game
      res.setHeader("Content-Type", "application/json");    //устанавливаем заголовок Content-Type в application/json, чтобы указать, что отправляемые данные будут в формате JSON
      res.end(JSON.stringify(game));     //конвертируем объект game обратно в строку JSON, используя JSON.stringify, и отправляем его браузеру в ответе
    });
  };

  module.exports = gameRouteController; //экспорт модуля, для использования его в файле app.js 