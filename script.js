window.onload = displayClock();
function displayClock(){
  var d = new Date();
  document.getElementById("date").innerHTML = d.getMonth() + "/" d.getDate() + "/" + d.getFullYear();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
  setTimeout(displayClock, 1000);
}

