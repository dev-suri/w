window.onload = displayClock();
function displayClock(){
  document.getElementById("timer").innerHTML = new Date().toLocaleTimeString().toLowerCase();;
  document.getElementById("date").innerHTML = new Date().toLocaleDateString().toLowerCase();;
  setTimeout(displayClock, 1000);
}

