window.onload = displayClock();
function displayClock(){
  var display = new Date();
  var string = display.toLocaleTimeString().toLowerCase(); 
  document.getElementById("timer").innerHTML = string;
  string = "today is " + display.toLocaleDateString().toLowerCase();
  document.getElementById("date").innerHTML = string;
  setTimeout(displayClock, 1000);
}

