$(document).ready(function() {
$('#start').on('click', function(){
  document.getElementById('questions').style.display= 'block'; 
  Decrement();
})
let min = 2;
let secs = min * 60;
 //countdown function is evoked when page is loaded 
 function countdown() { 
  setTimeout('Decrement()', 60); 
} 
 
function Decrement() { 
  if (document.getElementById) { 
      minutes = document.getElementById("minutes"); 
      seconds = document.getElementById("seconds"); 
 
      if (seconds < 59) { 
          seconds.value = secs; 
      }
      else { 
          minutes.value = getminutes(); 
          seconds.value = getseconds(); 
      } 
      if (mins < 1) { 
          minutes.style.color = "red"; 
          seconds.style.color = "red"; 
      } 
      if (mins < 0) { 
          alert('time up'); 
          minutes.value = 0; 
          seconds.value = 0; 
      } 
      else { 
          secs--; 
          setTimeout('Decrement()', 1000); 
      } 
  } 
} 

function getminutes() { 
  //minutes is seconds divided by 60, rounded down 
  mins = Math.floor(secs / 60); 
  return mins; 
} 

function getseconds() { 
  //take minutes remaining (as seconds) away  
  //from total seconds remaining 
  return secs - Math.round(mins * 60); 
} 
});