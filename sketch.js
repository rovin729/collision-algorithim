var fR, mR


function setup() {
  createCanvas(1200,800);
  fR=createSprite(200,200,50,80);
  fR.shapeColor="green";
  mR=createSprite(400,200,80,30);
  mR.shapeColor="green";
}
function draw() {
  background("black");

  mR.x=mouseX;
  mR.y=mouseY;

  if(mR.x-fR.x<mR.width/2+fR.width/2 && fR.x-mR.x<mR.width/2+fR.width/2 && mR.y-fR.y<mR.height/2+fR.height/2 && fR.y-mR.y<mR.height/2+fR.height/2){
    mR.shapeColor="red";
    fR.shapeColor="red";
  }else{
    mR.shapeColor="green";
    fR.shapeColor="green";
  }
  drawSprites();
}