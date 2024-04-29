const http=require("http");
const { mainRouteController, 
  gameRouteController, 
  defaultRouteController, 
  voteRouteController 
}=require("./controllers");

const PORT=3005;

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/":
            mainRouteController(res, "/index.html", ".html");//импорт контроллера
        break;
      case "/game":
        gameRouteController(res);////импорт контроллера отображения игр в интерфейсе
        break;
      case "/vote":
        voteRouteController(req, res);////импорт контроллера отображения игр в интерфейсе
        break;
      // ...другие маршруты
      default:
        defaultRouteController(res, url);//импорт контроллера
        break;
    }
  });

  server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });