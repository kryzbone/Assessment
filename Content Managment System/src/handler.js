const { Console } = require("console");
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
        //new post
        const { post } = qs.parse(reqBody);
        
        //add post to posts.json
        fs.readFile("src/posts.json", (err, file) => {
            if(err) throw err;

            //parse file to JSON
            file = JSON.parse(file);

            const posts = { ...file, [Date.now()]: post }
            fs.writeFileSync("src/posts.json", JSON.stringify( posts, null, 2 ) )
        })
        
        res.writeHead(302, {"Location": "/"})
        res.end();
    })
     
}

//All Blog Routes
exports.allBlogs = (req, res) => {
    fs.readFile("src/posts.json", (err, file) => {
        if(err) {
            res.writeHead(400, {"Content-Type": "text/html"})
            res.end("Bad request");
            return
        }

        res.writeHead(200, {"Content-Type":"application/json"});
        res.write(file);
        res.end();
    })
}

