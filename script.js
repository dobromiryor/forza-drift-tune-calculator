let front = 50;
let rear = 50;
let antirollBarsFront;
let antirollBarsRear;
let springsMin;
let springsMax;
let springsFront;
let springsRear;
let reboundStiffnessFront;
let reboundStiffnessRear;
let bumpStiffnessPercent;
let bumpStiffnessFront;
let bumpStiffnessRear;

const calculate = () => {
  springsMin = parseFloat($('#springsMin').val());
  springsMax = parseFloat($('#springsMax').val());
  bumpStiffnessPercent = parseFloat($('#bumpStiffnessPercent').val())/100;
  front = parseFloat($('#weightRatio').val())/100;
  rear = 1 - front;

  antirollBarsFront = ((65 - 1) * front) + 1;
  antirollBarsRear = ((65 - 1) * rear) + 1;
  springsFront = ((springsMax - springsMin) * front) + springsMin;
  springsRear = ((springsMax - springsMin) * rear) + springsMin;
  reboundStiffnessFront = ((20 - 3) * front) + 3;
  reboundStiffnessRear = ((20 - 3) * rear) + 3;
  bumpStiffnessFront = reboundStiffnessFront * bumpStiffnessPercent;
  bumpStiffnessRear = reboundStiffnessRear * bumpStiffnessPercent;
  
  $("#antirollBars").replaceWith(
    `<p id="antirollBars" class="light-grey-text fs-2 mt-1-5">
      ${antirollBarsFront.toFixed(2)}/${antirollBarsRear.toFixed(2)}
    </p>`
  )
  $("#springs").replaceWith(
    `<p id="springs" class="light-grey-text fs-2 mt-1-5">
      ${springsFront.toFixed(1)}/${springsRear.toFixed(1)}
    </p>` 
  )
  $("#reboundStiffness").replaceWith(
    `<p id="reboundStiffness" class="light-grey-text fs-2 mt-1-5">
      ${reboundStiffnessFront.toFixed(1)}/${reboundStiffnessRear.toFixed(1)}
    </p>`
  )
  $("#bumpStiffness").replaceWith(
    `<p id="bumpStiffness" class="light-grey-text fs-2 mt-1-5">
      ${bumpStiffnessFront.toFixed(1)}/${bumpStiffnessRear.toFixed(1)}
    </p>`
  )
}

$(document).ready(function(){
  $("#springsMin").change(calculate);
  $("#springsMax").change(calculate);
  $("#bumpStiffnessPercent").change(calculate);
  $("#weightRatio").change(calculate);
});