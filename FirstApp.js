//My First Server
const http = require('http');
const server = http.createServer((req, res) => {

  res.end("Shubham Mahulkar");
});

server.listen(4000, 'localhost', () => {
  console.log('Server is running on http://localhost:4000');
});
