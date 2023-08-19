img ="";
status="";
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modalLoaded)
document.getElementById("status").innerHTML="Status:Detecting Objects"
}
function modalLoaded(){
    console.log( "Modal is loaded ")
    status=true
    objectDetector.detect(img,gotResult)
}

function preload(){
img=loadImage("bedroom.jpg");
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("FRUIT BASKET",110,75);
    noFill();
    stroke("#FF0000");
    rect(55,120,430,350);

}
function gotResult(error,results){
if (error) {
    console.log(error)
} else {
   console.log(results) 
}
}
