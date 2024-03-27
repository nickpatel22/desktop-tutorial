// const redis = require('./redis');
// const redisClient = require('./redis');

//  var redisClient = require('./redis.js');

// var redisClient = require('redis').createClient();
//  redisClient.connect()
 
//  async function Getkey(key) {
//    return new Promise((resolve) => {
//      redisClient.get(key, function (_err, reply) {
//      resolve(reply);
//      });
//      })
//  }
 


var express = require('express');
var app = express();
var port = 5081;
var cors_url ="*"
var bodyParser = require('body-parser');
const { json } = require('express');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var User_array=[];
app.get('/listUsers', function (req, res) {
    res.end( "data" );
})

app.post('/AlertNotification', function (req, res) {
    var body = req.body;
    try {
        io.sockets.in(req.body.room).emit("notification", body);
        res.send("success");
    } catch (error) {
        console.log();
    }
});

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })

 var io = require('socket.io')(server, {
    'pingInterval': 2000,
    'pingTimeout': 5000,
    allowEIO3: true,
    cors: {
        origin: true,
        credentials: true
    }
});

io.on('connection', function (socket) {
    
        
    socket.on('room', function (room) 
    {
        socket.join(room);
        console.log("Connect to " + room);
        console.log("Connected to " + socket.id);
    });
    socket.on('UserConnected', function (room) {
        console.log("UserConnected " + room.Id+"  "+room.Username+"  "+room.Password); 
        var obj =new Object()
        obj["id"]=room.Id;
        obj["UserID"]=room.Username;
        obj["Socket_id"]=socket.id;
        User_array.push(obj);

        // var OpenOrderRoom = room.Username+"_OpenOrders"
        // var ClosedOrderRoom = room.Username+"_ClosedOrders"
        // socket.join(OpenOrderRoom);
        // socket.join(ClosedOrderRoom);
        io.sockets.in('AdminServices').emit('BrockerUserConnected',room);
    });

    socket.on('JoinRoom', function (room) {
        console.log("JoinRoom " + room.Id+"  "+room.Username+"  "+room.Password); 
        var OpenOrderRoom = room.Username+"_OpenOrders"
        socket.join(OpenOrderRoom);
    });

    socket.on('LeaveRoom', function (room) {
        console.log("LeaveRoom " + room.Id+"  "+room.Username+"  "+room.Password); 
        var ClosedOrderRoom = room.Username+"_ClosedOrders"
        socket.join(ClosedOrderRoom);
    });

    socket.on('roomLeave', function (room) {
        socket.leave(room);
        console.log("roomLeave to " + room);
        io.sockets.in(socket.id).emit('RemoveSymbol',room);
    });
    socket.on('disconnect', function () {
        var filtered = User_array.filter((el) => el.Socket_id == socket.id);
        User_array=  filtered;
        io.sockets.in('AdminServices').emit('BrockerUserDissConnected',filtered);
       //     User_array.pop(socket.id);
        console.log("disconnect to " + socket.id); 
    });

    socket.on('quotesreceive', function (room) {
        // var filtered = User_array.filter((el) => el.Socket_id != socket.id);

        // User_array=filtered;
       //     User_array.pop(socket.id);
        // console.log("quotesreceive " + room.Symbol+"  "+room.Bid+"  "+room.Ask); 
        io.sockets.in(room.Symbol).emit('notification',room);
    });
    socket.on('OpenOrders', function (room) {
        // var filtered = User_array.filter((el) => el.Socket_id != socket.id);

        // User_array=filtered;
       //     User_array.pop(socket.id);
        // console.log("OpenOrders " + room.acInfo.Userid); 
        var OpenOrderRoom = room.acInfo.Userid+"_OpenOrders"
        console.log("OpenOrders " + OpenOrderRoom); 
        io.sockets.in(OpenOrderRoom).emit('ClientOpenOrders',room);
    });

    socket.on('end', function (){
        console.log("disconnect to " + room);
        socket.disconnect(0);
    });
});
setInterval(async () => {
    io.sockets.in('nirav').emit('notification',Date());
    // console.log(Date());
   // io.sockets.in("nirav").emit("notification", "aaa");
}, 1000);

// setInterval(async () => {
//     if (User_array.length>0) {
//         User_array.forEach(async d => {
//             // let result= await redisClient.get(d.id);
//             io.sockets.in(d).emit("data", d);
//             console.error(d.id);
//         });        
//     }
// }, 1000);