const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

const server = app.listen(PORT, () => {console.log('listening on port ', PORT)});
const io = require('socket.io')(server);

let socketsConnected = new Set();


io.on('connection', onConnected)
io.emit('clients-total', socketsConnected.size)

function onConnected(socket) {
  console.log(socket.id);
  socketsConnected.add(socket.id);
  socket.on('disconnect', () => {
    console.log('scoket disconnected ', socket.id);
    socketsConnected.delete(socket.id);
    io.emit('clients-total', socketsConnected.size);
  });
  socket.on('message', (data) => {
    console.log('data received ', data);
    socket.broadcast.emit('chat-message', data);
  });
  socket.on('feedback', (data) => {
    socket.broadcast.emit('feedback', data);
  })
}