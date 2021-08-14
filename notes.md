if(keyIsDown(RIGHT_ARROW)){
    right();
}

if(right() && keyIsDown(UP_ARROW)){
    commando.changeAnimation("jumping_right",commandoJumpRight)
}

if(left() && keyIsDown(UP_ARROW)){
    commando.changeAnimation("jumping_left",commandoJumpLeft)
}

function right(){
    commando.changeAnimation("running_right",commandoright);
    commando.velocityX = 3;
}

function left(){
    commando.changeAnimation("running_left",commandoleft);
    commando.velocityX = -3;
}