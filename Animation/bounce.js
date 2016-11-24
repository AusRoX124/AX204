//alert("THIS WORKS BOY!!");

//Declaring and intializing variables

var canvas;
var ctx;
var x =600; //setting original position of circle
var y =300;
var mx = 2; //small change in x and y direction for each frame
var my = 4;
var width = 600;
var height =300;

//this function will draw the ball every 10 miliseconds
function init() {
	canvas=document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw,10);
}

//characteristics and drawing of the ball
function circle (x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle = "tomato";
	ctx.fill();
}

//clear your canvas
function clear(){
	ctx.clearRect(0,0,width, height);
}

function draw(){
	clear();
	circle(x,y,30);
	//to make the circle stay in the canvas
	if (x+mx > width || x+mx<0){
		mx = -mx;
	}
	if (y+my >height ||y+my<0){
		my = -my;
	}

	//move your x and y every frame
	x+=mx; //x=x+mx
	y+=my; //y=y+my
}

init();
