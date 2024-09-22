const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const styles = readFileSync("./navbar-app/styles.css");
const browser = readFileSync("./navbar-app/browser-app.js");
const logo = readFileSync("./navbar-app/logo.svg");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logo);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "javascript" });
    res.write(browser);
    res.end();
  } else {
    res.writeHead(400, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(500);
