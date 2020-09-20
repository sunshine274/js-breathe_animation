let counter = 0;
let timeleft = 65;

function convertSeconds(s) {
    let min = floor(s/60);
    let sec = s%60;
    return nf(min,2) + ':' + nf(sec,2);
}

function setup(){
   noCanvas();
   
   let timer = select('#timer');
   timer.html(counter);

   function timeIt(){
    counter ++;
    timer.html(timeleft - counter);
   }

   setInterval( timeIt, 1000);
}