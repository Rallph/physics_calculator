function toRadians(deg) {
  return deg * (Math.PI / 180);
}


function getComponents() {

  var angle = document.getElementById('angle').value;
  var vel = document.getElementById('vel').value;
  var direction = " upward";

  if (!document.getElementById('r1').checked)
    direction = " downward";

  var vox = vel * Math.cos(toRadians(angle));
  var voy = vel * Math.sin(toRadians(angle));



  $("#voxy").html("<h3>Results</h3>Horizontal Velocity is: " + vox.toFixed(2) + " m/s<br>Vertical Velocity is: " + voy.toFixed(2) + " m/s" + direction );
}


$(document).ready(function () {
    $("#comp").on("click", function(e) {
      e.preventDefault();
      getComponents()
    });
});
