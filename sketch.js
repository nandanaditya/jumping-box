var canvas;
var music;
var green;
var blue;
var red;
var orange;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    green = createSprite(1,790,20,20);
    green.shapeColor = green;

    red = createSprite(11,790,20,20);
    red.shapeColor = red;

    blue = createSprite(22,790,20,20);
    blue.shapeColor = aqua;

    orange = createSprite(33,790,20,20);
    orange.shapeColor = orange;

    ball = createSprite(random(20,750);
    ball.velocityX=4;
    ball.velocityY=4;


}

function draw() {
    background(rgb(169,169,169));
     
    if(green.isTouching(ball)&&ball.bounceOff(green)){
        ball.shapeColor = green;
    }


    if(blue.isTouching(ball)&&ball.bounceOff(blue)){
        ball.shapeColor = blue;
    }

    if(red.isTouching(ball)&&ball.bounceOff(red)){
        ball.shapeColor = red;
    }

    if(orange.isTouching(ball)&&ball.bounceOff(orange)){
        ball.shapeColor = orange;
    }



if(green.isTouching(ball)){
ball.shapeColor = rgb(225,128,0);
ball.velocityX = 0;
music.stop();
}

if(blue.isTouching(ball)){
    ball.shapeColor = rgb(225,128,0);
    ball.velocityX = 0;
    music.stop();
    }

    if(red.isTouching(ball)){
        ball.shapeColor = rgb(225,128,0);
        ball.velocityX = 0;
        music.stop();
        }

        if(orange.isTouching(ball)){
            ball.shapeColor = rgb(225,128,0);
            ball.velocityX = 0;
            music.stop();
            }







    
    //add condition to check if box touching surface and make it box
}
