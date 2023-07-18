const fs = require("fs");


function RequestHandeler(req, res) {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err)
            }
            console.log(data, "DAT")
            res.write("<html>")
            res.write("<head><title>Enter Message</title></head>")
            res.write(`<body><h1>${data}</h1><form action='/message' method='POST'><input type='text' name='message'></input><button type='submit'>Submit</button></form></body>`)
            res.write("</html>")
            return res.end()
        })
    }
    if (url === "/message" && method === "POST") {
        const body = []
        req.on("data", (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
        })
        res.statusCode = 302
        res.setHeader("Location", '/')
        return res.end();
    }

}

module.exports = RequestHandeler;