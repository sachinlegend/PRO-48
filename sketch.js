var player, playerLeftPose,playerRight, playerLeft;
var playerRightJump, playerLeftJump;
var playerShootAnimation;
var ground;
var villian1, villain2, villain3, villain4, villain5;

function preload(){
playerPose = loadAnimation("cos/costar.png")
playerRight = loadAnimation("cos/corr1.png","cos/corr2.png","cos/corr3.png","cos/corr4.png","cos/corr5.png","cos/corr6.png")
playerLeft = loadAnimation("clm/corl 1.png","clm/corl 2.png","clm/corl 3.png","clm/corl 4.png","clm/corl 5.png","clm/corl 6.png",)
playerRightJump = loadAnimation("cos/cojr1.png","cos/cojr2.png","cos/cojr3.png","cos/cojr4.png","cos/cojr5.png","cos/cojr6.png",)
playerLeftJump = loadAnimation("clm/cojl1.png","clm/cojl2.png","clm/cojl3.png","clm/cojl4.png","clm/cojl5.png","clm/cojl6.png",)

villain1 = loadImage("villains/Golem.png");
villain2 = loadImage("villains/GurdianSpirit.png");
villain3 = loadImage("villains/Monster.png");
villain4 = loadImage("villains/Phantom.png");
villain5 = loadImage("villains/evilGuardian.png");
}


function setup(){
createCanvas(800,500);

player = createSprite(250,250,30,70);

player.addAnimation("pose",playerPose);

player.addAnimation("right",playerRight);
player.addAnimation("left",playerLeft);

player.addAnimation("rightJump",playerRightJump);
player.addAnimation("leftJump",playerLeftJump)


player.changeAnimation("pose",playerPose);

ground = createSprite(400,height-50,800,20);

villainsGroup = new Group();
}

function draw(){
background(0);

if(keyWentDown(RIGHT_ARROW)){
    player.changeAnimation("right",playerRight)
}
if(keyWentUp(RIGHT_ARROW)){
    player.changeAnimation("pose",playerPose);

}
if(keyWentDown(UP_ARROW)){
    player.changeAnimation("rightjump",playerRightJump);
    player.velocityY = -10
  }
  if(keyWentUp(UP_ARROW)){
    player.changeAnimation("pose",playerPose)
  }

  player.velocityY = player.velocityY + 0.8

player.collide(ground)
villainsGroup.collide(ground)

spawnVillains();

drawSprites();
}

function spawnVillains() {
    if(frameCount % 400 === 150) {
      var villain = createSprite(600,360,10,40);
      //villain.debug = true;
      villain.velocityX = -(10);
      
      //generate random villains
      var rand = Math.round(random(1,5));
      switch(rand) {
        case 1: villain.addImage(villain1);
                break;
        case 2: villain.addImage(villain2);
                break;
        case 3: villain.addImage(villain3);
                break;
        case 4: villain.addImage(villain4);
                break;
        case 5: villain.addImage(villain5);
                break;
                default: break;
      }
      
      //assign scale and lifetime to the villain           
      villain.scale = 0.5;
      villain.lifetime = 300;
      //add each villain to the group
      villainsGroup.add(villain);
    }
  }