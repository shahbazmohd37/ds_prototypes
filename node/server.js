var express = require('express');

const PORT = process.env.PORT;
var app = express();

if (!PORT){
  throw new Error('POrt variable not defined');
}

app.get('/', (req, res) => {
  const data = `App running on ${PORT}`;
  res.send(data);
  res.end();
})
app.listen(PORT, '0.0.0.0', () => {console.log('listening ',PORT)})
// var path = require('path');
// var app = express();
// var bodyParser = require('body-parser');d
// var multer  = require('multer');
// var fs = require('fs');

// var urlEncodedParser = bodyParser.urlencoded({extended: false});
// var multerMiddleware = multer({ dest: '/tmp/'});
// var staticMiddleware = express.static(
//   path.join(__dirname, '/public')
// );

// app.use(staticMiddleware);
// // app.use(multer({dest: '/tmp/'}));
// app.use(urlEncodedParser);
// // app.use(multer({ dest: '/tmp/'}));

// console.log('pathname ', __dirname, '****', __filename);

// app.get('/', function(req,res) {
//   res.sendFile( __dirname + "/" + "index.html" );
// });

// app.get('/process_get', function(req,res) {
//   const response = {
//     firstName: req.query.firstName,
//     lastName: req.query.last_name
//   };
//   console.log('response in process', response);
//   res.end(JSON.stringify(response));
// })

// app.post('/process_post',urlEncodedParser, function(req,res) {
//   const response = {
//     firstName: req.body.firstName,
//     lastName: req.body.last_name
//   };
//   res.send(JSON.stringify(response));
// })

// app.post('/upload_file', function(req,res) {
//   console.log(req.files.file.name);
//   console.log(req.files.file.path);
//   var response;
//   var file = __dirname + '/' + req.files.file.name;
//   fs.readFile(req.files.file.path, multerMiddleware, function(err, data) {
//     fs.write(file, data, function(err) {
//       if(err) {
//         console.log('error');
//       } else {
//          response = {
//            message: 'FIle uploaded successfully',
//            name: req.files.file.name
//         }
//       }
//       console.log(response);
//       res.send(JSON.stringify(res))
//     })
//   })
// })

// app.get('/usersList', function(req,res) {
//   fs.readFile(__dirname + '/users.json', 'utf8', function(err, data) {
//     console.log(data);
//     res.end(data);
//   })
// });

// app.post('/addUser', function(req,res) {
//   var user4 = {
//     "name" : "Mohammad shahba",
//     "password" : "shahbaz123",
//     "profession" : "engineer",
//     "id": 4
//  };
//  fs.readFile(__dirname+'/users.json', 'utf8', function(err, data) {
//     data = JSON.parse(data);
//     data['user4'] = user4;
//    res.end(JSON.stringify(data))
//  })
// })

// app.get('/item', function(req,res) {
//   res.send('item response sent');
//   res.end();
// })

// app.get('/item/*', function(req,res) {
//   res.send('item detail response sent');
//   res.end();
// })

// var server = app.listen(8081, function(req,res) {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://%s:%s ', host, port);
// })





// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function(req, res) {
//   var pathname = url.parse(req.url).pathname;
//   console.log('pathname ', pathname);
//   fs.readFile(pathname.substr(1), function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/plain'})
//     } else {
//       res.writeHead(200, {'Content-Type': 'text/plain'})
//       res.write(data.toString());
//     }
//     res.end();
//   })
// }).listen(8081);

// console.log('the server is running on port 8081');

// chat system

// list of users -> showing online, offline, message read? , message history, 
// user's profile -> edit profile,
// settings functionality
    // security, notification,


// frontend ->


// Home component - Headers, UserComponent (showing latest mssg, msg read or not),
// onClick of UserComponent -> Particular userChat is opened , MessageHistory, InputBox, 
// Settings -> notification, securtiy, UserProfile (may be routed or shown in )

// My app is connected to websocket (subscribe to a server);
// 