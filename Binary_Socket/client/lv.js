
 
 
// var objRefrance;
// var objCLientDetail;
// var name = prjName;
// var objPremium = new Object();
// var objPorduct = new Object();
// var objSpotProduct = new Object();
// var objCopySpotProduct = new Object();

// adminsocket.on('connect', function () {
//     adminsocket.emit('room', name);
// });

// adminsocket.on("ClientData", function (data) {
//     try {
//         if (data != "") {
//             objRefrance = JSON.parse(data);
//         }
//     } catch (e) {

//     }
// });

// adminsocket.on('message', function (data) {
     
//     if (data != "") {
//         localStorage.setItem("GeneralPremium_data", JSON.stringify(objPorduct));
//         try {
//             var objGenPremium = localStorage.getItem("GeneralPremium_data");
//             objPremium = JSON.parse(objGenPremium);
//         } catch (e) {

//         }


//         let htmlproduct = "";
//         let htmlHd = "";
//         let rates = data.Rate;
//         let BuyDisplay = "";
//         let SellDisplay = "";
//         let HighDisplay = "";
//         let LowDisplay = "";
//         let Backslace = "";
//         let htmlStock = "";
//         let BuyTDDisplay = "";
//         let SellTDDisplay = "";
//         let HighLowHeader = "";
//         if (objCLientDetail != undefined) {


//             if (objCLientDetail.RateDisplay == true) {
//                 var html = '';
//                 if (objCLientDetail.BuyRate == false) { BuyDisplay = "display:none" }
//                 if (objCLientDetail.SellRate == false) { SellDisplay = "display:none" }
//                 if (objCLientDetail.HighRate == false) { HighDisplay = "display:none"; }
//                 if (objCLientDetail.LowRate == false) { LowDisplay = "display:none"; }
//                 if (objCLientDetail.HighRate == true && objCLientDetail.LowRate == true) { Backslace = "/"; }
//                 if (objCLientDetail.BuyRate == false && objCLientDetail.LowRate == false) { BuyTDDisplay = "display:none"; }
//                 if (objCLientDetail.SellRate == false && objCLientDetail.HighRate == false) { SellTDDisplay = "display:none"; }
//                 if (objCLientDetail.HighRate == false && objCLientDetail.LowRate == false) { highlowhide = "display:none"; }
//                 if ($.grep(rates, function (x) { return x.IsDisplay == "True" }).length > 0) {

//                     // htmlHd += '<table class="table">' +
//                     //     '<tbody>' +
//                     //     '  <tr class="product-title-color">' +
//                     //     '      <td class="p-h p0"><span>PRODUCT</span></td>' +
//                     //     '      <td class="p-h ph text-center" style="' + BuyDisplay + '"><span>BUY</span></td>' +
//                     //     '      <td class="p-h ph text-center" style="' + SellDisplay + '"><span>SELL</span></td>' +
//                     //     '      <td class="p-h ph text-center" style="' + HighDisplay + '"><span>HIGH</span></td>' +
//                     //     '      <td class="p-h ph text-center" style="' + LowDisplay + '"><span>LOW</span></td>' +
//                     //     '      <td class="p-h ph text-center"><span></span></td>' +
//                     //     '  </tr>' +
//                     //     ' </tbody>' +
//                     //     '</table>';

//                     htmlHd += '<tr class="headertable1">' +
//                         '           <th class="ratevalue">SYMBOL</th>' +
//                         '            <th class="ratevalue1" style="' + BuyTDDisplay + '"><span style="' + BuyDisplay + '">BUYING RATE </span></th>' +
//                         '            <th class="ratevalue1" style="' + SellTDDisplay + '"><span style="' + SellDisplay + '">SELLING RATE</span></th>' +
//                         '      </tr>';
//                 }
//                 try {
//                     for (let i = 0; i < rates.length; i++) {
//                         let sname = rates[i].Symbol;
//                         let bid = rates[i].Bid;
//                         let ask = rates[i].Ask;
//                         let high = rates[i].High;
//                         let low = rates[i].Low;
//                         let src = rates[i].Source.toLocaleLowerCase();
//                         let stock = rates[i].Stock;
//                         let IsDisplayFront = rates[i].IsDisplay;

//                         if (IsDisplayFront.toLocaleLowerCase() == "true") {

//                             let bgcolor_class_bid = "";
//                             let bgcolor_class_ask = "";
//                             try {

//                                 if (bid == objPremium[i + 'Bid']) {
//                                     bgcolor_class_bid = 'e';
//                                 } else if (bid >= objPremium[i + 'Bid']) {
//                                     bgcolor_class_bid = 'h';
//                                     objPorduct[i + 'Bid'] = bid
//                                 } else if (bid <= objPremium[i + 'Bid']) {
//                                     bgcolor_class_bid = 'l';
//                                     objPorduct[i + 'Bid'] = bid
//                                 } else {
//                                     objPorduct[i + 'Bid'] = bid;
//                                     bgcolor_class_bid = 'e';
//                                 }
//                             } catch (e) { }

//                             try {
//                                 if (ask == objPremium[i + 'Ask']) {
//                                     bgcolor_class_ask = 'e';
//                                 } else if (ask >= objPremium[i + 'Ask']) {
//                                     bgcolor_class_ask = 'h';
//                                     objPorduct[i + 'Ask'] = ask
//                                 } else if (ask <= objPremium[i + 'Ask']) {
//                                     bgcolor_class_ask = 'l';
//                                     objPorduct[i + 'Ask'] = ask
//                                 } else {
//                                     objPorduct[i + 'Ask'] = ask;
//                                     bgcolor_class_ask = 'e';
//                                 }
//                             } catch (e) { }

//                             // htmlproduct += '<div class="content-cover">' +
//                             //     '                                <table>' +
//                             //     '                                    <tbody>' +
//                             //     '                                        <tr class="ligh-white">' +
//                             //     '                                            <td class="p-h p0">' +
//                             //     '                                                <div class="main-product-cover">' +
//                             //     '                                                    <h3>' + sname + '</h3>' +
//                             //     '                                                </div>' +
//                             //     '                                            </td>' +
//                             //     '                                            <td class="p-h ph product-rate" style="' + BuyDisplay + '">' +
//                             //     '                                                <div class="mn-rate-cover">' +
//                             //     '                                                    <span class="bgm ' + bgcolor_class_bid + '">' + bid + '</span>' +
//                             //     '                                                </div>' +
//                             //     '                                            </td>' +
//                             //     '                                            <td class="p-h ph product-rate" style="' + SellDisplay + '">' +
//                             //     '                                                <div class="mn-rate-cover">' +
//                             //     '                                                    <span class="bgm  ' + bgcolor_class_ask + '">' + ask + '</span>' +
//                             //     '                                                </div>' +
//                             //     '                                            </td>' +
//                             //     '                                            <td class="p-h ph product-rate" style="' + HighDisplay + '">' +
//                             //     '                                                <div class="mn-rate-cover">' +
//                             //     '                                                    <span class="bgm  " style="color:#000">' + high + '</span>' +
//                             //     '                                                </div>' +
//                             //     '                                            </td>' +
//                             //     '                                            <td class="p-h ph product-rate" style="' + LowDisplay + '">' +
//                             //     '                                                <div class="mn-rate-cover">' +
//                             //     '                                                    <span class="bgm" style="color:#000">' + low + '</span>' +
//                             //     '                                                </div>' +
//                             //     '                                            </td>' +
//                             //     '                                            <td class="p-h ph product-rate">' +
//                             //     '                                                <a href="Terminal/Login.html" target="_blank"><input type="button" value="BUY"></a>' +
//                             //     '                                            </td>' +
//                             //     '                                        </tr>' +
//                             //     '                                    </tbody>' +
//                             //     '                                </table>' +
//                             //     '                            </div>';


//                             htmlproduct += '<tr id="liverates">' +
//                                 '                                    <td class="ratevaluerightborder">' + sname + '</td>' +
//                                 '                                    <td class="ratevalue2" style="' + BuyTDDisplay + '"><span class="' + bgcolor_class_bid + '" style="' + BuyDisplay + '">' + bid + '</span><span class=" hl" style="' + LowDisplay + '">L - ' + low + '</span></td>' +
//                                 '                                    <td class="ratevalue2" style="' + SellTDDisplay + '"><span  class="' + bgcolor_class_ask + '" style="' + SellDisplay + '">' + ask + '</span><span class=" hl" style="' + HighDisplay + '" >H - ' + high + '</span></td>' +
//                                 '                                </tr>';



//                         }
//                     }
//                     localStorage.setItem("GeneralPremium_data", JSON.stringify(objPorduct));
//                     $('#divProduct').html(htmlproduct);
//                     $('#divHeader').html(htmlHd);
//                 } catch (e) { }
//             } else {
//                 $('#tblsm').html("Live Rate currently not available");
//             }
//         }
//     }
// });

// $(document).on("click", ".closeNotification", function (e) {
//     $("#notificationDiv").html("");
// });

// document.onkeydown = function (evt) {
//     evt = evt || window.event;
//     if (evt.keyCode == 9) {
//         $("#notificationDiv").html("");
//     }
// };

//  let objrates;
// // adminsocket.on('Liverate', function (data) {

// //     let rate= utf8decoder.decode(data);
// //       rate= JSON.parse(rate);
// //     liverate[rate.symbol]=rate

    
// // });

// adminsocket.on('Liverate', function (data) {
//         let rate= utf8decoder.decode(data);
//       rate= JSON.parse(rate);
//     liverate[rate.symbol]=rate

//     // let objrates = data;
//     let viewSymbole = "gold,silver,goldnext,silvernext,xauusd,xagusd,inrspot"
//     let futurehtml = '';
//     let spothtml = '';
//     let nexthtml = '';
//     let futurehtmlHD = '';
//     let futureHD = true;
//     let spothtmlHD = '';
//     let spotHD = true;
//     let nexthtmlHD = '';
//     let nextHD = true;


//     try {
//         localStorage.setItem("Spot_data", JSON.stringify(objSpotProduct));
//         try {
//             var SpotProduct_data = localStorage.getItem("Spot_data");
//             objCopySpotProduct = JSON.parse(SpotProduct_data);
//         } catch (e) {

//         }

//         for (let i = 0; i < objrates.length; i++) {
//             let symbole = objrates[i]["symbol"];
//             let ObjSymbole = $.grep(objRefrance, function (v) {
//                 return v.Source.toLowerCase() == symbole.toLowerCase();
//             });
//             let s = objrates[i]["symbol"].toLowerCase()

//             if (ObjSymbole.length > 0) {



//                 let ref_class_bid = "";
//                 let ref_class_ask = "";
//                 try {

//                     if (objrates[i]["Bid"] == objCopySpotProduct[i + 'Bid']) {
//                         ref_class_bid = 'e';
//                     } else if (objrates[i]["Bid"] >= objCopySpotProduct[i + 'Bid']) {
//                         ref_class_bid = 'h';
//                         objSpotProduct[i + 'Bid'] = objrates[i]["Bid"]
//                     } else if (objrates[i]["Bid"] <= objCopySpotProduct[i + 'Bid']) {
//                         ref_class_bid = 'l';
//                         objSpotProduct[i + 'Bid'] = objrates[i]["Bid"]
//                     } else {
//                         objSpotProduct[i + 'Bid'] = objrates[i]["Bid"];
//                         ref_class_bid = 'e';
//                     }
//                 } catch (e) { }

//                 try {
//                     if (objrates[i]["Ask"] == objCopySpotProduct[i + 'Ask']) {
//                         ref_class_ask = 'e';
//                     } else if (objrates[i]["Ask"] >= objCopySpotProduct[i + 'Ask']) {
//                         ref_class_ask = 'h';
//                         objSpotProduct[i + 'Ask'] = objrates[i]["Ask"]
//                     } else if (objrates[i]["Ask"] <= objCopySpotProduct[i + 'Ask']) {
//                         ref_class_ask = 'l';
//                         objSpotProduct[i + 'Ask'] = objrates[i]["Ask"]
//                     } else {
//                         objSpotProduct[i + 'Ask'] = objrates[i]["Ask"];
//                         ref_class_ask = 'e';
//                     }
//                 } catch (e) { }


//                 if (ObjSymbole[0].IsDisplay == true) {

//                     if (symbole.toLocaleLowerCase() == "gold" || symbole.toLocaleLowerCase() == "silver") {

//                         if (futureHD == true) {
//                             futureHD = false;
//                             futurehtmlHD += '<tr class="headertable2">' +
//                                 '                                <th class="ratevalue3">DESCRIPTION</th>' +
//                                 '                                <th class="rate2">BID</th>' +
//                                 '                                <th class="rate2">ASK</th>' +
//                                 '                                <th class="rate3">HIGH/LOW</th>' +
//                                 '                            </tr>';

//                         }

//                         futurehtml += '<div class="col-md-6 mt-3">' +
//                             '                  <div class="gold-cover-tittle">' +
//                             '                     <p class="spot-mainall">' + ObjSymbole[0].Symbol_Name + '</p>' +
//                             '                     <div class="cover_bs">' +
//                             '                        <div class="buy-sell-cover">' +
//                             '                           <div class="rating-cover">' +
//                             '                              <h6>BUY</h6>' +
//                             '                              <h5> <span class="' + ref_class_bid + '">' + objrates[i]["Bid"] + '</span></h5>' +
//                             '                           </div>' +
//                             '                           <div class="rating-cover">' +
//                             '                              <h6>SELL</h6>' +
//                             '                              <h5> <span class="' + ref_class_ask + '">' + objrates[i]["Ask"] + '</span></h5>' +
//                             '                           </div>' +
//                             '                        </div>' +
//                             '                        <div class="hl-rate-cover">' +
//                             '                           <p style="float: left;">H-' + objrates[i]["High"] + '</p>' +
//                             '                           <p style="float: right;">l-' + objrates[i]["Low"] + '</p>' +
//                             '                        </div>' +
//                             '                     </div>' +
//                             '                  </div>' +
//                             '               </div>';


//                     } else if (symbole.toLocaleLowerCase() == "xauusd" || symbole.toLocaleLowerCase() == "xagusd" || symbole.toLocaleLowerCase() == "inrspot") {


//                         {
//                             $(".mainproduct").removeAttr("style");

//                             let rateSinge = '<i class="fa fa-usd"></i>';
//                             if (symbole.toLocaleLowerCase() == "inrspot") {
//                                 rateSinge = '<i class="fa fa-inr"></i>';
//                             }
//                             if (spotHD == true) {
//                                 spotHD = false;
//                                 spothtmlHD += '<tr class="headertable2">' +
//                                     '                                <th class="ratevalue3">DESCRIPTION</th>' +
//                                     '                                <th class="rate2">BID</th>' +
//                                     '                                <th class="rate2">ASK</th>' +
//                                     '                                <th class="rate3">HIGH/LOW</th>' +
//                                     '                            </tr>';
//                             }

//                             spothtml += '<div class="col-md-4 mt-4">' +
//                                 '                  <div class="gold-cover-tittle">' +
//                                 '                     <p class="spot-mainall">' + ObjSymbole[0].Symbol_Name + '</p>' +
//                                 '                     <div class="cover_bs">' +
//                                 '                        <div class="buy-sell-cover">' +
//                                 '                           <div class="rating-cover">' +
//                                 '                              <h6>BUY</h6>' +
//                                 '                              <h5><span class="' + ref_class_bid + '">' + objrates[i]["Bid"] + '</span></h5>' +
//                                 '                           </div>' +
//                                 '                           <div class="rating-cover">' +
//                                 '                              <h6>SELL</h6>' +
//                                 '                              <h5><span class="' + ref_class_ask + '">' + objrates[i]["Ask"] + '</span></h5>' +
//                                 '                           </div>' +
//                                 '                        </div>' +
//                                 '                        <div class="hl-rate-cover">' +
//                                 '                           <p style="float: left;">H-' + objrates[i]["High"] + '</p>' +
//                                 '                           <p style="float: right;">l-' + objrates[i]["Low"] + '</p>' +
//                                 '                        </div>' +
//                                 '                     </div>' +
//                                 '                  </div>' +
//                                 '               </div>';


//                         }
//                     } else if (symbole.toLocaleLowerCase() == "goldnext" || symbole.toLocaleLowerCase() == "silvernext") {
//                         {

//                             if (symbole.toLocaleLowerCase() == "goldnext") {
//                                 console.log(ref_class_bid)
//                                 nextImageName = "gold.png";
//                             } else if (symbole.toLocaleLowerCase() == "silvernext") {
//                                 nextImageName = "silver.png";
//                             }
//                             if (nextHD == true) {
//                                 nextHD = false;
//                                 nexthtmlHD += '<tr class="headertable2">' +
//                                     '                                <th class="ratevalue3">DESCRIPTION</th>' +
//                                     '                                <th class="rate2">BID</th>' +
//                                     '                                <th class="rate2">ASK</th>' +
//                                     '                                <th class="rate3">HIGH/LOW</th>' +
//                                     '                            </tr>';
//                             }



//                             nexthtml += '<div class="col-md-6 mt-3">' +
//                             '                  <div class="gold-cover-tittle">' +
//                             '                     <p class="spot-mainall">' + ObjSymbole[0].Symbol_Name + '</p>' +
//                             '                     <div class="cover_bs">' +
//                             '                        <div class="buy-sell-cover">' +
//                             '                           <div class="rating-cover">' +
//                             '                              <h6>BUY</h6>' +
//                             '                              <h5> <span class="' + ref_class_bid + '">' + objrates[i]["Bid"] + '</span></h5>' +
//                             '                           </div>' +
//                             '                           <div class="rating-cover">' +
//                             '                              <h6>SELL</h6>' +
//                             '                              <h5> <span class="' + ref_class_ask + '">' + objrates[i]["Ask"] + '</span></h5>' +
//                             '                           </div>' +
//                             '                        </div>' +
//                             '                        <div class="hl-rate-cover">' +
//                             '                           <p style="float: left;">H-' + objrates[i]["High"] + '</p>' +
//                             '                           <p style="float: right;">l-' + objrates[i]["Low"] + '</p>' +
//                             '                        </div>' +
//                             '                     </div>' +
//                             '                  </div>' +
//                             '               </div>';
//                         }
//                     }
//                 }
//             }
//         }
//         localStorage.setItem("Spot_data", JSON.stringify(objSpotProduct));
//         $('#divSpotHd').html(spothtmlHD);
//         $('#divSpot').html(spothtml);
//         $('#divFutureHd').html(futurehtmlHD);
//         $('#divFuture').html(futurehtml);
//         $('#divNextHd').html(nexthtmlHD);
//         $('#divNext').html(nexthtml);
//     } catch (e) {
//         console.log(e)
//     }
// });

// function getParameterByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, "\\$&");
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// }