const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

// console.log(publicPath);

const port = process.env.PORT || 3000
var app = express();
var server = http.createServer(app);
var io = socketIO(server)

app.use(express.static(publicPath));

// app.get('/', function(req, res){
//   res.send('hello world')
// });

io.on('connection', function (socket) {
  console.log("new connection");

  socket.on('disconnect', function(){
    console.log('Disconnected');
  })
})

server.listen(port, function(){
  console.log(`server is running on port ${port}`);
});
