noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
 poseNet=ml5.poseNet(video,modelloaded);
 poseNet.on('pose',gotPoses);
}
function modelloaded(){
console.log('PoseNet Is Initialized')
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x= "+ noseX +"nose y= "+noseY);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("left wrist x="+leftwristX+"right wrist x "+rightwristX+"difference="+difference);
document.getElementById("square_sides").innerHTML="width and height of the square will be="+difference+"px";
    }
}
function draw(){
    background('#a7acb5');
fill("#3098b0")
stroke("#3098b0")

square(noseX,noseY,difference)
}