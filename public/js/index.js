var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

//   socket.emit('createEmail', {
//     to: 'me@example.com',
//     text: 'New York New York '
//   });
//
//   socket.emit('createMessage', {
//     from: 'its you',
//     text: 'and me'
//   })
 });

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('new email', email);
})

socket.on('createMessage', function (message) {
  console.log('createMessage', message);
})

socket.on('newMessage', function(message){
  console.log('newMessage', message);
})
