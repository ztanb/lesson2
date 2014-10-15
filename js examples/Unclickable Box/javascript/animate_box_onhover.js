// My variables
var i  = 0; // loop index for messages
var x  = 0; // initial x position of box
var y  = 0; // initial y position of box
var dx = Math.random()*600; // next x position for box after a hover
var dy = Math.random()*600; // next y position for box after a hover

messages = [ // Messages to display on a hover
  "So close",
  "Almost",
  "I actually thought you got it that time...",
  "This must be hard for you.",
  "Don't give up! I believe in you!",
  "OK, this is getting sad now",
  "You got it! Oh, wait, no you didn't. Never mind.",
  "..."
]

// Called whenever the mouse hovers
function init(){ 
  b = document.getElementById("box"); // find the box div
  moveBox(); // move it
  document.getElementById('title').innerHTML=messages[i%8] //change the message
  i++; //incriment the message index
} 

// source: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
// Creates an 'animation frame' for animation with javascript
window.requestAnimFrame = (function(){   
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


// actually move the box
function moveBox(){
  x += (dx-x)*0.25; // find the next x-position (1/4 times the difference of the current position and 
                    // the next new position, to give it a smooth effect)
  y += (dy-y)*0.25; 
  b.style.left= x + "px"; // move the box there (the animation will take place below)
  b.style.top= y + "px";
    if (Math.abs(x-dx) < 0.5) { // if the next x position is less than 0.5 pts away, just stop the box 
      dx = Math.random()*600;   // and then pick a new next position
      dy = Math.random()*600;
      return ;
    } 
  requestAnimFrame(moveBox,b); // animate the box movement
}