var dog, happyDog, database, foodS, foodStock , position;
var backgroundImg, dogImg;

function preload()
{
  //dogImg = loadImage("dogImg.png");
  //happyDog = loadImage("dogImg1.png");
  backgroundImg = loadImage("bg.jpg");
  
}


function setup(){
    createCanvas(900,500);
    database= firebase.database();
    dog = createSprite(450,450,50,50);
    //dog.addImage("dogImg")
    dog.shapeColor = "black";
    var dogposition =  database.ref('dog/position');
    dogposition.on("value",readposition)
}

function draw(){
    background(backgroundImg);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('dog/position').set({
        'x': position.x + x,
        'y': position.y + y 
        
    })
}
function readposition(data){
    position = data.val();
    dog.x=position.x;
    dog.y=position.y;
}



