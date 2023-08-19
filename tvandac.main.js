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
img=loadImage("tv and ac.jpg");
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("TV",90,75);
    noFill();
    stroke("#FF0000");
    rect(53,125,500,350);

    fill("#FF0000");
    text("AC",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,30,353,320);

}
function gotResult(error,results){
if (error) {
    console.log(error)
} else {
   console.log(results) 
}
}
