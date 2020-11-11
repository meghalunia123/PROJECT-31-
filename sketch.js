const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  

   Ground = new ground(240,400,480,20);

   

   for(var k = 0; k<=Width; k=k+80 ){
    divisions.push(new divisions(k,height+divisionHeight/2,10,divisionHeight))
  }

  for(var j =40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j =15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  if(frameCount%60===0){
    particles.push(new Particle(randon(width/2-10, width/2+10,10,0)))
  }

  

}

function draw() {
  background(0,0,0); 
  
  Ground.display();
  division.display();

  for (var j = 0; j<particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }

  
  drawSprites();
}