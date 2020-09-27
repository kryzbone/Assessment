const url = require("url");
const path = require("path");
const fs = require("fs");

module.exports = function static(req, res) {
    //parse request url
    const pathname = url.parse(req.url, true).pathname;
    //get file extention and serve static files
    const ext = path.parse(pathname).ext;
    if(ext) {
        //MIME types
        const mimeType = {
            '.ico': 'image/x-icon',
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.json': 'application/json',
            '.css': 'text/css',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.wav': 'audio/wav',
            '.mp3': 'audio/mpeg',
            '.svg': 'image/svg+xml',
            '.pdf': 'application/pdf',
            '.doc': 'application/msword'
        };
        
        //set content-type
        const contentType = mimeType[ext];

        fs.readFile( __dirname + "/../public" + pathname, (err, file) => {
            if(err) {
                res.writeHead(404)
                res.end()
                return
            }
            res.writeHead(200, {"Content-Type" : contentType})
            res.end(file)
            return
        })  
    }
}