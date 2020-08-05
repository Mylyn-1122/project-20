var car, wall;

var weight, speed;

function setup() {
  speed = random(50, 90);
  weight = random(400, 1500);
  
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  
  wall = createSprite(1500, 200, 40, height/2);

}

function draw() {
  background(255,255,255);  

  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation < 100){
      car.shapeColor = color(0, 225, 0);
    }
    if(deformation > 99 && deformation < 180){
      car.shapeColor = color(230, 230, 0);
    }
    if(deformation > 180){
      car.shapeColor = color(225, 0, 0);
    }

  }

  console.log(car.x);

  drawSprites();
}