var modal = document.getElementById("modaldoc");

var a = document.getElementById("docs");

var span = document.getElementsByClassName("close")[0];

a.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}