

//Maintenance
var maintenance = document.getElementById("maintenanceNotice");
var btn = document.getElementById("BtnPnl");

var span = document.getElementsByClassName("cL")[0];

btn.onclick = function() {
  maintenance.style.display = "block";
}

span.onclick = function() {
  maintenance.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == maintenance) {
    maintenance.style.display = "none";
  }
}