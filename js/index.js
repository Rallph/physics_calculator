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


function getVo() {

  var vox = $("#invox").val();
  var voy = $("#invoy").val();

  var vo = (Math.sqrt(Math.pow(vox,2) + Math.pow(voy,2))).toFixed(2);

  var output = "<h3>Result</h3>The original velocity is " + vo + " m/s";

  if ((vox == 0.0) || (voy == 0.0))
    output = "Please enter the velocity components";

  $("#vo").html(output);
}


function getDistances() {

  var vert = document.getElementById('vert').value;
  var hori = document.getElementById('hor').value;
  var time = document.getElementById('time').value;


}





$(document).ready(function () {

    $(".compbox").on("keyup", function(e) {
      e.preventDefault();
      getComponents()
    });

    $(".vobox").on("keyup", function(e) {
      e.preventDefault();
      getVo();
    });


    $(".distbox").on("keyup", function(e) {
      e.preventDefault();
      getDistances();
    });
});
