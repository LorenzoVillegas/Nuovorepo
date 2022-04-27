
//--- GLOBAL VARs
const domHour=document.getElementById("hour");
const domMinute=document.getElementById("minute");
const domSecond=document.getElementById("second");
const domBar=document.getElementById("bar");


const domBtnStart=document.getElementById("btnStart");
const domBtnStop=document.getElementById("btnStop");
 
let second=0;
let minute=0;
let hour=0
let myInterval;
let barLength=1;
let attivo;

// --- FUNCTIONs
function startCounter(){
 

  if (typeof(myInterval) == "undefined" || attivo == true) { 
    
    return myInterval = setInterval(conteggioFunc, 1000);
    
   }
    
  // continua tu
}

function stopCounter(){
  clearInterval(myInterval)
  
  if (typeof(myInterval) != "undefined") { 
    
    return attivo = false; }


  // continua tu
}

function conteggioFunc(){
  second++
  domSecond.innerText = second
  if (second >= 60) {
    second=0
    minute++
    domMinute.innerText = minute
  } 

  if (minute >=60) {
    minute = 0
    hour++
    domHour.innerText = hour
    }
   // continua tu
   console.log("tic")
}

 
// --- MAIN
domBtnStart.addEventListener( 'click' , startCounter)
domBtnStop.addEventListener(  'click' , stopCounter)
