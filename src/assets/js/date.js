const months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];       

let tomorrow = new Date();

tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));       

document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();
