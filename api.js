const http = require("http");
const DEFAULT_USER = { username: "leeodesign", password: "123" };
const routes = {
  "/contact:get": (request, response) => {
    response.write("Contact us page!");
    response.end();
  },
  "/login:post": async (request, response) => {
    for await (const data of request) {
      const user = JSON.parse(data);
      if (
        user.username !== DEFAULT_USER.username ||
        user.password !== DEFAULT_USER.password
      ) {
        response.writeHead(401);
        response.write("Login failed!");
        response.end();
      }
    }
    response.write("Logging has succeeded!");
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
