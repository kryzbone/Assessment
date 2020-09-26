const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const port = process.env.PORT || 3000;

//create server
http.createServer((req, res) => {   
    //parse request url
    const pathname = url.parse(req.url, true).pathname;

    //get file extention and serve static files
    const ext = path.parse(pathname).ext;
    if(ext) {
        //MIME types
        const mime = {
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
        const contentType = mime[ext];

        fs.readFile(__dirname + "/public" + pathname, (err, file) => {
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


    //default route
    if(pathname === "/") {
        fs.readFile(__dirname + "/public/index.html", (err, file) => {
            if(err) {
                res.writeHead(400, {"Content-Type": "text/html"})
                res.end("Bad request");
            }
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(file);
            res.end();
        });  
    }
    
    
}).listen(port, () => console.log("listening on port " + port + ". Visit locallhost:3000"));

