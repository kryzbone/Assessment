const http = require("http");

const port = process.env.PORT || 3000;

//create server
const server = http.createServer((req, res) => {

    

}).listen(port, () => console.log("listening on port " + port));

