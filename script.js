window.onload = displayClock();
function displayClock(){
  var d = new Date();
  var k = d.getMonth() + "/" d.getDate() + "/" + d.getFullYear();
  console.log(d.getMonth() + "/" d.getDate() + "/" + d.getFullYear());
  console.log(k);
  var j = d.toLocaleTimeString();
  console.log(d.toLocaleTimeString());
  console.log(j);
  setTimeout(displayClock, 10000);
}

