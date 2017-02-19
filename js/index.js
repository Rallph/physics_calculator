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

  var output = "<h3>Results</h3>Horizontal Velocity is: " + vox.toFixed(2) + " m/s<br>Vertical Velocity is: " + voy.toFixed(2) + " m/s" + direction;

  if ((vox == 0.00) || (voy == 0.00))
    output = "Enter angle and velocity for components";



  $("#voxy").html(output);
}


$(document).ready(function () {
    $("#comp").on("click", function(e) {
      e.preventDefault();
      getComponents()
    });
});
