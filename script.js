let front = 0;
let rear = 0;
let units = "imperial";
let antirollBarsFront;
let antirollBarsRear;
let springsFront;
let springsRear;
let reboundStiffnesFront;
let reboundStiffnesRear;
let bumpStiffnessFront;
let bumpStiffnessRear;

const calculate = () => {
  front = ($('#weightRatio').val()/100).toFixed(2);
  rear = (1 - front).toFixed(2);
  units = $('input[name=units]:checked').val();

  if(units === "imperial") {
    antirollBarsFront = (((65-1)*front)+1).toFixed(2);
    antirollBarsRear = (((65-1)*rear)+1).toFixed(2);
    springsFront = (((1524.3-304.9)*front)+304.9).toFixed(2);
    springsRear = (((1524.3-304.9)*rear)+304.9).toFixed(2);
    reboundStiffnesFront = (((20-3)*front)+3).toFixed(2);
    reboundStiffnesRear = (((20-3)*rear)+3).toFixed(2);
    bumpStiffnessFront = (reboundStiffnesFront/2).toFixed(2);
    bumpStiffnessRear = (reboundStiffnesRear/2).toFixed(2);
  } else if (units === "metric") {
    antirollBarsFront = (((65-1)*front)+1).toFixed(2);
    antirollBarsRear = (((65-1)*rear)+1).toFixed(2);
    springsFront = (((97.5-19.5)*front)+19.5).toFixed(2);
    springsRear = (((97.5-19.5)*rear)+19.5).toFixed(2);
    reboundStiffnesFront = (((10-1)*front)+1).toFixed(2);
    reboundStiffnesRear = (((10-1)*rear)+1).toFixed(2);
    bumpStiffnessFront = (reboundStiffnesFront/2).toFixed(2);
    bumpStiffnessRear = (reboundStiffnesRear/2).toFixed(2);
  }
  
  $("#antirollBars").replaceWith( `<p id="antirollBars" class="light-grey-text">${antirollBarsFront}/${antirollBarsRear}</p>` )
  $("#springs").replaceWith( `<p id="springs" class="light-grey-text">${springsFront}/${springsRear}</p>` )
  $("#reboundStiffness").replaceWith( `<p id="reboundStiffness" class="light-grey-text">${reboundStiffnesFront}/${reboundStiffnesRear}</p>` )
  $("#bumpStiffness").replaceWith( `<p id="bumpStiffness" class="light-grey-text">${bumpStiffnessFront}/${bumpStiffnessRear}</p>` )
}

$(document).ready(function(){
  $("input[name=units]").change(calculate);
  $("#weightRatio").change(calculate);
});