status="";
img="";
objectDetector = "";
objects=[];
function preload(){
img = loadImage('th (1).jpg');
}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML ="status:detecting objects";
}
function modelLoaded(){
    console.log("MODEL LOADED");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;

}
function draw(){
    
    if(status!=""){
        image(img,0,0,500,500);
     r=random(255);
     g=random(255);
     b=random(255);
     objectDetector.detect(img,gotResult);
     for(i=0;i<objects.length;i++){
         document.getElementById("status").innerHTML = "status:object detected";

         fill(r,g,b);
         percent = floor(objects[i].confidence*100);
         text(objects[i].label+"   "+percent+" %",objects[i].x+5,objects[i].y+10);
         noFill();
         stroke(r,g,b);
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
     }
    }
}