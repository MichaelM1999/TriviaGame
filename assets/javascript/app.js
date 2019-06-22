$(document).ready(function() {
$('#start').on('click', function(){
  document.getElementById('questions').style.display= 'block';
  start(); 
})
let intervalId;

let clockRunning = false;
let time = 10;


$('#time').text(time);

function start() {
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }}
  
  function count() {
    time--;
    let converted = timeConverter(time);
    // console.log(converted);
    
    $("#time").text(converted);
    if (time === 0) {
      clockRunning = false;
      document.getElementById('questions').style.display= 'none';
      document.getElementById('start').style.display= 'none';
      let answers = $('<h2>').text('correct').appendto('#answers')
    }
  }
function timeConverter(t) {

  let minutes = Math.floor(t / 60);
  let seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}



}
);