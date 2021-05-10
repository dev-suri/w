window.onload = displayClock();
function displayClock(){
  var display = new Date().toLocaleTimeString().toLowerCase(); document.getElementById("timer").innerHTML = display;
  setTimeout(displayClock, 1000);
  
  
  display = "today is " + new Date().toLocaleDateString().toLowerCase();
  document.getElementById("date").innerHTML = display;
  setTimeout(displayClock, 1000);
  
}

