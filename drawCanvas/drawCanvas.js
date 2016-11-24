var NIPPLES = new Image();
NIPPLES.src="NIPPLES.jpg";
NIPPLES.onload=function(){
	ctx4.drawImage(NIPPLES,200,200,50,90)
}

var Tank1 = new Image();
Tank1.src="Tank1.jpg";
Tank1.onload=function(){
	ctx4.drawImage(Tank1,100,100,25,45)
}

var Tank2 = new Image();
Tank2.src="Tank2.png";
Tank2.onload=function(){
	ctx4.drawImage(Tank2,300,300,75,135)
}


var c=document.getElementById("myCanvas1");
var ctx=c.getContext("2d");

//start drawing
ctx.beginPath();
//set drawing style
ctx.strokeStyle="red";
//move your pen to the starting point
ctx.moveTo(75,0);
//drawing the right tip of the diamond
ctx.lineTo(150,75);
//draw line to bottom tip
ctx.lineTo(75,150);
//left tip
ctx.lineTo(0,75);
//actually drawing
ctx.stroke();
//set fill color
ctx.fillStyle="red";
//actually fill the shape
ctx.fill();
var c2=document.getElementById("myCanvas2");
var ctx2=c2.getContext("2d");

//start drawing
ctx2.beginPath();
ctx2.strokeStyle="blue";
ctx2.moveTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.lineTo(0,0);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle="blue";
ctx2.fill();

var c3=document.getElementById("myCanvas3");
var ctx3=c3.getContext("2d");
//circle thinger that looks like Japanese flag
ctx3.beginPath();
//draw circle- 5 parameters:centerx, centery, radius,
ctx3.arc(150,150,30,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle="red";
ctx3.fill();

var c4=document.getElementById("myCanvas4");
var ctx4=c4.getContext("2d");

