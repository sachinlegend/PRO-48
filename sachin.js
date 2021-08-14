var ground;
var commando, commandoAnimation, commandoJumpRight, commandoShootR, commandoimg, commandoright, commandol;
var commandoAnimationL, commandoJumpLeft, commandoShootL, commandoleft;


function preload() {

  //commando right pose, right running animation & right jumping animation
  commandoAnimation = loadAnimation("cos/costar.png")
  commandoright = loadAnimation("cos/corr1.png","cos/corr2.png","cos/corr3.png","cos/corr4.png","cos/corr5.png","cos/corr6.png");
  commandoJumpRight = loadAnimation("cos/cojr1.png","cos/cojr2.png","cos/cojr3.png","cos/cojr4.png","cos/cojr5.png","cos/cojr6.png");
  commandoShootR = loadAnimation("cos/cosr1.png","cos/cosr2.png","cos/cosr3.png","cos/cosr4.png");
  commandoAnimationL = loadAnimation("clm/costal.png")
  commandoleft = loadAnimation("clm/corl 1.png","corl 2.png","corl 3.png","corl 4.png","corl 5.png","corl 6.png")
  commandoJumpLeft = loadAnimation("clm/cojl 1.png","cojl 2.png","cojl 3.png","cojl 4.png","cojl 5.png","cojl 6.png")
  commandoShootL = loadAnimation("clm/coshl 1.png","coshl 2.png","coshl 3.png","coshl 4.png","coshl 5.png","coshl 6.png")

}

function setup() {
  createCanvas(800,400);
  commando  =  createSprite(400, 200, 50, 50);
  commando.addAnimation("right_pose",commandoAnimation)
  commando.addAnimation("running_right",commandoright)
  commando.addAnimation("jumping_right",commandoJumpRight)
  commando.addAnimation("shooting_right",commandoShootR)
  commando.addAnimation("left_pose",commandoAnimationL)
  commando.addAnimation("running_left",commandoleft)
  commando.addAnimation("jumping_left",commandoJumpLeft)
  commando.addAnimation("shooting_left",commandoShootL)
  commando.changeAnimation("right_pose",commandoAnimation)

  ground = createSprite(400,380,800,20)
}

function draw() {
  background(0);
  
  if(keyIsDown(RIGHT_ARROW)){
    commando.changeAnimation("running_right",commandoright);
    commando.velocityX = 3;
  }

  if(keyIsDown(UP_ARROW)){
    commando.changeAnimation("jumping_right",commandoJumpRight);
    commando.velocityY = -10
  }

  if(keyDown("a")){
    commando.changeAnimation("shooting_right",commandoShootR);

  }
  commando.velocityY = commando.velocityY + 0.8

  camera.position.x = commando.x;

  commando.collide(ground)

  drawSprites();
}