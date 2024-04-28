const {staticFile} = require("../appModules/http-utils");//Контроллер для основного маршрута
const {getData, endpoints}= require("../appModules/api");
const {config, makeRatingFile}= require("../appModules/rating");


//функция-контроллер
async function mainRouteController(res, publicUrl, extname) {
    const data =  await getData(endpoints.games);
    await makeRatingFile(config.PATH_TO_RATING_FILE, data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
};

module.exports = mainRouteController; //экспорт модуля, для использования его в файле app.js 