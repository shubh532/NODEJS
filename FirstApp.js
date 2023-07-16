const http = require('http');
const RequestHandeler=require("./RequestHandler")

const server = http.createServer(RequestHandeler)


server.listen(4000, 'localhost', () => {
  console.log('Server is running on http://localhost:4000');
});
