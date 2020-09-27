const fs = require("fs");
const qs = require("querystring");



//default Route
exports.index = (req, res) => {
    try {
        fs.readFile(__dirname + "/../public/index.html", (err, file) => {
            if(err) {
                res.writeHead(400, {"Content-Type": "text/html"})
                res.end("Bad request");
                return
            }
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(file);
            res.end();
        });  
    } catch(err) {
        console.log(err)
    }
}


//Create New Blog
exports.createPost = (req, res) => {   
    let reqBody = "";

    //accumulate data coming in as stream
    req.on("data", (chunk) => {
        reqBody += chunk;
        reqBody.trim()
    })

    //when the stream ends
    req.on("end", () => {
        console.log(qs.parse(reqBody));
        res.writeHead(302, {"Location": "/"})
        res.end();
    })
     
}
