var dog,dogImg;
var happyDog,dogHappy;
var database;
var foodS;
var foodStock;
var canvas;

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg)
  
  var foodStock=database.ref('Food');
  foodStock.on("value",readStock);


}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW))
  {
writeStock(foodS)
dog.addImage(dogHappy);
  }


  drawSprites();
  //add styles here

  fill("purple");
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(42);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",200,100 )
  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  // if(x<=0){
  //   x=0;
  //   }else{
  //     x=x-1;
  //   }

  database.ref('/').update({
    Food:x
  })
}


