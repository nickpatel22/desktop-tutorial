 var adminsocketurl = "http://88.119.174.194:5081";
  const adminsocket = io(adminsocketurl, {
});
debugger 
var Arr  ='BITCOIN';
adminsocket.on('connect', function () {
  adminsocket.emit('room', 'NG_Q22');
  adminsocket.emit('room', 'SILVER_III');
  adminsocket.emit('room', 'USDCAD');
  adminsocket.emit('room', 'USDJPY');
  adminsocket.emit('room', 'EURCHF');
  adminsocket.emit('room', 'EURGBP');
 });
var liverate = new Object();

adminsocket.on('notification', function (data) {
  try {
    console.log(data)
    $("#advetiseImg1").attr("src", data.img);
  } catch (error) {
    console.log(error)
  }
});
adminsocket.on('data', function (data) {
  try {
   console.log(data)

  } catch (error) {
    console.log(error)
  }
});
adminsocket.on('eventName', function (data) {
  try {
   console.log(data)

  } catch (error) {
    console.log(error)
  }
});



//   var adminsocketurl = "wss://stream.binance.com:9443";
//   const adminsocket = io(adminsocketurl, {
// });
// debugger 
// adminsocket.emit('room',strea);

// var Arr  ='BITCOIN';
// adminsocket.on('connect', function () {
//   adminsocket.emit('room', 'BITCOIN');
//  });
// var liverate = new Object();

// adminsocket.on('notification', function (data) {
//   try {
//     console.log(data)
//     $("#advetiseImg1").attr("src", data.img);
//   } catch (error) {
//     console.log(error)
//   }
// });
// adminsocket.on('data', function (data) {
//   try {
//    console.log(data)

//   } catch (error) {
//     console.log(error)
//   }
// });
// adminsocket.on('eventName', function (data) {
//   try {
//    console.log(data)

//   } catch (error) {
//     console.log(error)
//   }
// });

 