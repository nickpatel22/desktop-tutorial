var express = require('express');
var app = express();
var port = 2088;
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

    socket.on('adminroom', function (room) 
    {
        socket.join(room);
        console.log("Admin Connect to " + room);
        console.log("Admin Connected to " + socket.id);
    });
    socket.on('UserConnected', function (room) {

       
            console.log(room.user);

        // console.log("UserConnected " + room.Id+"  "+room.Username+"  "+room.Password); 
        var obj =new Object()
        var roomName =`user_${room.user}`; 
        obj["id"]=room.user;
        obj["UserID"]=room.user;
        obj["Socket_id"]=socket.id;
        obj["roomName"]=roomName;
        obj["connected"]=true;
        User_array.push(obj);


        console.log(User_array);
        socket.join(roomName);

        // var OpenOrderRoom = room.Username+"_OpenOrders"
        // var ClosedOrderRoom = room.Username+"_ClosedOrders"
        // socket.join(OpenOrderRoom);
        // socket.join(ClosedOrderRoom);

        io.sockets.in('BinarySocketAdmin').emit('UserConnected_Admin',obj);
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

        console.log(filtered); 

        io.sockets.in('BinarySocketAdmin').emit('UserDissConnected_Admin',filtered);
        io.sockets.in('AdminServices').emit('BrockerUserDissConnected',filtered);
       //     User_array.pop(socket.id);
        console.log("disconnect to " + socket.id); 
    });

    socket.on('quotesreceive', function (room) {
        io.sockets.in(room.Symbol).emit('notification',room);
    });
    socket.on('binancequotesreceive', function (room) {
        console.log(room); 
        io.sockets.in(room.Symbol).emit('quotes',room);
    });


    socket.on('OpenOrders', function (room) {
    //     // var filtered = User_array.filter((el) => el.Socket_id != socket.id);

    //     // User_array=filtered;
    //    //     User_array.pop(socket.id);
    //     // console.log("OpenOrders " + room.acInfo.Userid); 
    //     console.log("OpenOrders " + OpenOrderRoom); 
    try {
        var OpenOrderRoom = room.d[0].uid+"_OpenOrders"
//        console.log(OpenOrderRoom);
        io.sockets.in(OpenOrderRoom).emit('ClientOpenOrders',room);
    } catch (error) {
        
    } 
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

