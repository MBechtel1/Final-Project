var y = 100;
var enemies = [];
var numberOfEnemies = 20;
var enemySpeed = 10;

function setup() {
 createCanvas(1000, 600);  
 noCursor();
  stroke(255);     
  frameRate(30);
  for (var i = 0; i < numberOfEnemies; i++) {
	  enemies.push(new Enemy());
  }
}

function draw() { 
background(0);   // Set the background to black
fill(8, 27, 245);
ellipse(mouseX, mouseY, 30, 30);
fill(252, 60, 115);

enemies.forEach(function(enemy) {
	enemy.move();
	enemy.display();
	enemy.checkCollision();
});
} 

function Enemy() {
	this.x = random(width);
	this.y = random(height);
	this.diameter = (15, 15);
	this.speed = [random(-enemySpeed, enemySpeed), random(-enemySpeed, enemySpeed)];
	

	this.move = function() {
		if (this.x > width) {
		  this.x = 0;
		} else if (this.x < 0) {
			this.x = width;
		} else {
		  this.x += this.speed[0];
		}
		if (this.y > height) {
			this.y = 0;
		} else if (this.y < 0) {
			this.y = height;
		} else {
		this.y += this.speed[1];
		}
		
	
	};
	
	this.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter); 
    };
	
	this.checkCollision = function() {                      //this is what is not working
		if(this.x > (mouseX - 15) && this.x < (mouseX + 15) ) {
			if(this.y > (mouseY - 15) && this.y < (mouseY + 15) ) {	
      alert('You touched a ball so you lose! Press OK to restart');
		}
			}
	};
	

}