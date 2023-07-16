//My First Server
const http = require('http');
const server = http.createServer((req, res) => {
  const url=req.url
  if(url==="/home"){
  res.write("<h1>Welcome TO my Home</h1>");
  res.end();

}else if (url==="/about"){
  res.write("<h1>Welcome TO my About Page </h1>");
  res.end();

}else if (url==="/node"){
  res.write("<h1>Welcome TO my NODE JS PROJECT </h1>");
  res.end();
}else{
  res.write("<h1>Welcome Shubham </h1>");
  res.end();
}
  
});

server.listen(4000, 'localhost', () => {
  console.log('Server is running on http://localhost:4000');
});
