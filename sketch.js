const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var scoregame=0;
var backgroundImage;

function preload (){
  getTime();
}


function setup() {
  createCanvas(1300,600);

 //console.log(score);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(900,880,1200,20);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1 = new Block(480,275,30,40);
  block2 = new Block(450,275,30,40);
  block3 = new Block(420,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(360,275,30,40);
  block6 = new Block(330,275,30,40);
  block7 = new Block(300,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  b1 = new Block(900,280,30,40);
  b2 = new Block(900,320,30,40);
  b3 = new Block(870,320,30,40);
  b4 = new Block(930,320,30,40);
  b5 = new Block(900,360,30,40);
  b6 = new Block(870,360,30,40);
  b7 = new Block(840,360,30,40);
  b8 = new Block(930,360,30,40);
  b9 = new Block(960,360,30,40);
  


}

function draw() {
if(backgroundImage)
  background(backgroundImage);

  fill("red");
  textFont("comic sans ms");
  textSize(30);
  text("Score:"+ scoregame,750,40);

   

  fill("lime");
  textFont("comic sans ms");
  textSize(30);
  text("Press Space To Get A Chance To Play Again",200,100);

  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display(); 

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();


  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();

  

  polygon.display();

  launcher.display();
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    launcher.attach(polygon.body);

  }

}
async function getTime() {
  
  var getinfo= await   fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var infotype = await getinfo.json();
  //console.log(infotype)
    
  var time = infotype.datetime;
  console.log(time);

  var hr = time.slice(11,13);
  console.log(hr);

  if(hr >= 6 && hr <=18) {
      bg = "daysky.jpg";
  } else {
      bg = "nightsky.jpg";
  }

  backgroundImage = loadImage(bg);
  console.log(backgroundImage)
}