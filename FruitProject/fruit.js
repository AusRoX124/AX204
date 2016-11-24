// alert ("It works!");

//Declaring and initializing variables
var canvas;
var ctx;
var x = 250; //setting original position of circle
var y = 250;
var r = 20;
var mx = 0;  //small change in x- and y- direction for each frame
var my = 0;
var width = 500;
var height = 500;
//Positions for good and bad fruit
var goodX;
var goodY;
var badX;
var badY;
var spriteHeight = 50;
var spriteWidth = 50;
//declare two Booleans to track whether collisions is happening
var goodCollision = false;
var badCollision = false;
var score = 0;

//this function will draw the ball every 10 milliseconds
function init(){
	canvas=document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	badX = Math.floor(Math.random()*450);
	badY = Math.floor(Math.random()*450);
	goodX = Math.floor(Math.random()*450);
	goodY = Math.floor(Math.random()*450);
	//waiting for user to press keyboard
	window.onkeydown = keydownControl;
	return setInterval(draw,10);
}

//characteristics and drawing of the ball
function circle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle = "tomato";
	ctx.fill();
}

//Clear your canvas
function clear(){
	ctx.clearRect(0,0,width, height);
}

//draw function to create a frame
function draw(){
	clear();
	circle(x,y,r);
	drawBadFruit();
	drawGoodFruit();
	collisionCheck();
	collisionHandle();
	//to make the circle stay in the canvas
	if (x+mx > width-r || x+mx<r){
		mx = -mx; //change to opposite direction
	}
	else if (y+my >height-r ||y+my<r){
		my = -my;
	}

	//move your x and y every frame
	x+=mx;	//x=x+mx
	y+=my;	//y=y+my
}

function keydownControl(e) {
	if(e.keyCode == 37){
		mx = -4;
		my = 0;
	}
	else if (e.keyCode == 39){
		mx = +4;
		my = 0;
	}
	else if (e.keyCode == 38){
		mx = 0;
		my = -4;
	}
	else if (e.keyCode == 40){
		mx = 0;
		my = 4;
	}
}

function drawBadFruit(){
	ctx = document.getElementById("myCanvas").getContext("2d");
	var bad = new Image();
	bad.src="bad.png";
	ctx.drawImage(bad,badX,badY,50,50);
}
function drawGoodFruit(){
	ctx = document.getElementById("myCanvas").getContext("2d");
	var good = new Image();
	good.src="good.png";
	ctx.drawImage(good,goodX,goodY,50,50);
}

function collisionCheck () {
	if ( (x >= badX) && (x <= badX + spriteWidth) && ( y >= badY) && (y <= badY + spriteHeight)) {
		badCollision = true;
	} else {
 		badCollision = false;
 	}
 		if ( (x >= goodX) && (x <= goodX + spriteWidth) && ( y >= goodY) && (y <= goodY + spriteHeight)) {
		goodCollision = true;
	} else {
 		goodCollision = false;
 	}

 }
function collisionHandle(){
	if (goodCollision == true) {
		score+=1;
		document.getElementById("score").innerHTML = "Score: " + score;

		goodX = Math.floor(Math.random()*450);
		goodY = Math.floor(Math.random()*450);
	}
		if (badCollision == true) {
		score-=1;
		document.getElementById("score").innerHTML = "Score: " + score;
		badX = Math.floor(Math.random()*450);
		badY = Math.floor(Math.random()*450);
	}
}


init();


