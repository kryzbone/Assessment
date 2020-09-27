const handler = require("./handler");
const static = require("./static")

module.exports = function routes(req, res) {
    //serve static files
    static(req, res)

    //default route
    if(req.url === "/")  handler.index(req, res);

    //create post route
    if(req.url == "/create" && req.method === "POST") handler.createPost(req, res);

}