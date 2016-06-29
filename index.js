const http = require('http');
const port = process.env.PORT || 3000;

const jsonBody = require("body/json");
const requestHandler = (req, res) => {
  jsonBody(req, res, function (err, body) {
    // err is probably an invalid json error
    if (err) {
      res.statusCode = 500
      return res.end("NO U")
    }

    // I am an echo server
    res.setHeader("content-type", "application/json")
    res.end(JSON.stringify(body))
})
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
