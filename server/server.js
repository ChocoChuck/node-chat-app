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

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app'
  })

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'Andrew just joined the chat',
    createdAt: new Date().getTime()
  })

  // socket.emit('newEmail', {
  //   from: 'mike@email.com',
  //   text: 'yooo'
  // })
  //
  // socket.emit('newMessage', {
  //   from: 'ya boyy',
  //   text: 'wash pappin '
  // })

  socket.on('createEmail', function(newEmail){
    console.log('createEmail', newEmail);
  })

  socket.on('createMessage', function (message) {
    console.log('createMessage', message)
    // io.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // })
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // })
  })

  socket.on('disconnect', function(){
    console.log('Disconnected');
  })
})

server.listen(port, function(){
  console.log(`server is running on port ${port}`);
});
