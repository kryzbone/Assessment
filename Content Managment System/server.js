const http = require("http");

const port = process.env.PORT || 3000;

//create server
http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("Hello and welcome to CMS");
    res.end();

}).listen(port, () => console.log("listening on port " + port + ". Visit locallhost:3000"));

