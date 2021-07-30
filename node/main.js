// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//   console.log('connection successful');
//   eventEmitter.emit('data_received')
// }

// eventEmitter.on('connection', connectHandler);
// eventEmitter.on('data_received', function() {
//   console.log('data receive event handler called');
// });

// eventEmitter.emit('connection')

// var fs = require('fs');
// // var data = fs.readFileSync('input.txt');

// fs.readFile('input.txt', function(err, data) {
//   if (err) return console.log(err);
//   console.log(data.toString());
// })

// var fs = require("fs");
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
//    console.log('chunk', chunk)
// });

// readerStream.on('end',function() {
//    console.log(data);
// });

// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });

console.log('fileName ', __filename, '*****', __dirname);