var y = 100;
var ball;

function setup() {

 
  createCanvas(700, 500);  
  noCursor();
  stroke(255);     
  frameRate(30);
  ball = new Enemy();
  ball2 = new Enemy();
  ball3 = new Enemy();
  ball4 = new Enemy();
  ball5 = new Enemy();
  ball6 = new Enemy();
  
}


function draw() { 
background(0);   // Set the background to black
fill(8, 27, 245);
ellipse(mouseX, mouseY, 30, 30);
fill(252, 60, 115);
ball.move();
ball.display();
ball2.move();
ball2.display();
ball3.move();
ball3.display();
} 

function Enemy() {
	this.x = random(width);
	this.y = random(height);
	this.diameter = (15, 15);
	this.speed = 2;
	
	this.move = function() {
		this.x += random(1 * this.speed, this.speed);
		this.y += random(1 * this.speed, this.speed);
	};
	
	this.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	};

}