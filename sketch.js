
var ball;
var database,position;
function setup(){
    database= firebase.database();
    createCanvas(500,500);
    ball=createSprite(250,250,20,20);
    ball.shapeColor="blue";
    var ballPosition = database.ref('ball/position');
    ballPosition.on("value",readPosition,showError);
}
function readPosition(data){
position=data.val();
ball.x=position.x;
ball.y =position.y;
}

function showError(){
    console.log("There is an error while connecting the database");
}

function draw(){
    background("white");
if(keyDown(UP_ARROW)){
changePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
changePosition(0,1);
}
else if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
changePosition(1,0);
}

    
    drawSprites();
}

function changePosition(x,y){
database.ref('ball/position').set({
    'x':position.x+x, 
    'y':position.y+y
})
}