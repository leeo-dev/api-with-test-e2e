const http = require("http");
const handler = (request, response) => {
  response.end("hello");
};

const app = http
  .createServer(handler)
  .listen(3000, () => console.log("Server is running at ", 3000));

module.exports = app;
