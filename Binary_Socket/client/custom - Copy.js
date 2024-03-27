var adminsocketurl = "http://127.0.0.1:2088";
const adminsocket = io(adminsocketurl, {
});
debugger
var Arr = 'BITCOIN';
const user = {
  user: 130001
}
adminsocket.on('connect', function () {
  // adminsocket.emit('room', Arr);
  // adminsocket.emit('room', 'BAT');
  // adminsocket.emit('room', 'NIFTY_III');
  // adminsocket.emit('room', 'BANKNIFTY_III');
  // adminsocket.emit('room', 'AAVE');
  // adminsocket.emit('room', 'EURGBP');
  adminsocket.emit('UserConnected', user);
  adminsocket.emit('room', `${user.user}_OpenOrders`);
});

var liverate = new Object();
let orders = [];
adminsocket.on("ClientOpenOrders", function (data) {
  try {
    data.forEach(element => {
      debugger;
      var filtered = orders.filter((el) => el.Id == element.Id);
      if (filtered.length == 0) {
        orders.push(element);
        const myDiv = document.getElementById("main");
        const newElement = document.createElement("div");
        newElement.id = `${element.Id}`;


        var html = '<div class="pop-up-cover" style="' +
          '">' +
          '       <div class="pop">' +
          '       <div class="">' +
          '               <div class="col-md-12">' +
          '                   <div class="pop-text">' +
          '                       <h4>' + element.Id + ' ,<a href="#"><i class="fa fa-times closeNotification" aria-hidden="true"></i></a></h4>' +
          '                       <p>' + element.Id + '</p>' +
          '                   </div>' +
          '               </div>' +
          '           </div>' +
          '       </div>' +
          '   </div>';
        //             newElement.textContent = `${element.Id}`;


        myDiv.appendChild(newElement);
        document.getElementById(`${element.Id}`).innerHTML = html;
      }


      console.log(element)

    });
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
});

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

