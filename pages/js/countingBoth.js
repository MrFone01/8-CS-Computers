var x = 0;
var y = 0;
var z = 0;
var reset = false;
function setup(){
createCanvas(800, 100);
frameRate(30)
}

function draw(){
    if(reset == true){
	x = 0
	reset = false
    }
    background(255)
    stroke(255)
    fill(255)
    rect(0,0,800,100)
     stroke(0)
    textAlign(RIGHT)
    textFont('monospace')
    textSize(32);
    fill(0, 102, 153);
    if(x%10===0){
	z = x/10
	y = parseInt(x/10,10).toString(2);
	text(z, 400,30)
	text(y, 400,60);
    }
    else{
	text(z,400,30)
	text(y, 400, 60);
    }
    x++
    
}

function mouseClicked(){
    reset = true;
}