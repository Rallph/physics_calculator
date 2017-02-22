function toRadians(deg) {
  return deg * (Math.PI / 180);
}

function toDeg(rad) {

  return rad * (180 / Math.PI);
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

  var hordist = time * hori;
  var horout = "<h3>Horizontal</h3>The horizontal distance is: " + hordist + " meters";

  $("#horres").html(horout);


  var verout = "<h3>Vertical</h3>";
  var verd = 0.0;

 //if (vert > 0) {

    var tpeak = vert / 10;
    var dtop = 0.5 * vert * tpeak;
    var tleft = time - tpeak;
    var ddown = 0.5 * tleft * (10 * tleft);

    verout += "Time to peak is: " + tpeak.toFixed(2) + " seconds.<br>Vertical distance to peak is: " + dtop.toFixed(2) + " meters.<br>Vertical Distance from peak is: " + ddown.toFixed(2) + "meters.<br>Total vertical distance traveled is: " + (dtop + ddown).toFixed(2) + " meters";

    $("#vertres").html(verout);
//  }

}

function getAngle() {

  var c1 = document.getElementById('c1').checked; // opposite
  var c2 = document.getElementById('c2').checked; // adjacent
  var c3 = document.getElementById('c3').checked; // hypotenuse

  var in1 = $("#in1").val();
  var in2 = $("#in2").val();
  var result = 0.0;
  var output = "<h3>Result</h3>";

  if (c1 && c2) { // tan
      result = toDeg(Math.atan(in1 / in2));

  } else if (c1 && c3) { // sin
    result = toDeg(Math.asin(in1 / in2));

  } else if (c2 && c3 ) { // cos
    result = toDeg(Math.acos(in1 / in2));

  } else {
    output = "Please select the sides";
  }

  output += "The angle is: " + result.toFixed(2) + " degrees";
  $("#angout").html(output);

}





$(document).ready(function () {

    $(".compbox").on("keyup", function(e) {
      e.preventDefault();
      getComponents();
    });

    $(".vobox").on("keyup", function(e) {
      e.preventDefault();
      getVo();
    });


    $(".distbox").on("keyup", function(e) {
      e.preventDefault();
      getDistances();
    });

    $(".angbox").on("keyup", function(e) {
      e.preventDefault();
      getAngle();
    });


});
