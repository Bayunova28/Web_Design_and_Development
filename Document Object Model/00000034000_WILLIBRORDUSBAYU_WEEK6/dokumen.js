var head = document.getElementsByTagName("head")[0];

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "dokumen.js";
header.appendChild(script);

var title = document.getElementById("title").getElementsByTagName("h1")[0].firstChild;
title.nodeValue = "Chat Box";

var nama = document.getElementById("input").getElementsByTagName("p")[1].firstChild;
nama.nodeValue = "nama :";

var boxNama = document.createElement("textarea")[2];
document.body.appendChild(boxNama);

var chat = document.getElementById("input").getElementsByTagName("p")[3].firstChild;
chat.nodeValue = "Chat :";

var boxChat = document.createElement("textarea")[3];
document.body.appendChild(boxChat);

x = document.createElement("br")[0];
document.body.appendChild(x);

var btnSend = document.createElement("button")[1];
var send = document.createTextNode("SEND");
btnSend.appendChild(send);
document.body.appendChild(btnSend);

var btnClear = document.createElement("button")[2];
var clear = document.createTextNode("CLEAR");
btnClear.appendChild(clear);
document.body.appendChild(btnClear);





