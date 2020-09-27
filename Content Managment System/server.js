const http = require("http");
const routes = require("./src/routes")



const port = process.env.PORT || 3000;

//create server
const server = http.createServer( routes );

server.listen(port, () => console.log("listening on port " + port + ". Visit locallhost:3000"));

