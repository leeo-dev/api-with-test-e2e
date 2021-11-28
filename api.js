const http = require("http");

const routes = {
  "/contact:get": (request, response) => {
    response.write("Contact us page!");
    response.end();
  },
  default: (request, response) => {
    response.writeHead(404);
    response.write("404 Not Found!");
    response.end();
  },
};
const handler = (request, response) => {
  const { url, method } = request;
  const routeKey = `${url}:${method.toLowerCase()}`;
  const Route = routes[routeKey] || routes.default;
  response.writeHead(200, { "Content-Type": "text/html" });
  return Route(request, response);
};

const app = http
  .createServer(handler)
  .listen(3000, () => console.log("Server is running at ", 3000));

module.exports = app;
