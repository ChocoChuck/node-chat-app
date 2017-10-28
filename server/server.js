const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

// console.log(publicPath);

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

// app.get('/', function(req, res){
//   res.send('hello world')
// });

app.listen(port, function(){
  console.log(`server is running on ${port}`);
});
