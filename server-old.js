const http = require("http")

cosnt server = http.createServer((req, res) => {
    // as a reminder, a status code 200 means 'success'
    res.statusCode = 200

    //tell the browser what we're sending back
    res.setHeader("Content-Type", "text/html")

    //send back some content
    res.write("<h1>Hello, World</h1>")

    //sends response back to the browser
    res.end()
})

// web servers need to be continuously listening
server.listen(8080, () => {
    console.log("Server started on port 8080");
})