difference=0;
leftWristX=0;
rightWristX=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,333);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    background("#969A97");
}
function draw(){
background("#869A97");
    textSize(difference);
    fill("#ff0000");
    text("Darsh",20,300);
}
function modelLoaded(){
    console.log("Pose Net Loaded");
}
function gotPoses(results)
{
if(results.length > 0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX - rightWristX);
document.getElementById("displayer").innerHTML="The Current Font Size Is "+difference;
}
}